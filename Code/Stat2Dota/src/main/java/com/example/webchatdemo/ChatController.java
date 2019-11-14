package com.example.webchatdemo;

import com.google.gson.Gson;
import database.DataForGraphsDatabase;
import database.PlayerMatchStatisticsDatabase;
import database.PlayerStatisticsDatabase;
import org.json.JSONException;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import parseStatistics.ParseJSONPlayerMatchStatistics;
import parseStatistics.ParseJSONPlayerStatistics;
import parseStatistics.ParseJSONSearchResponseByName;
import statistics.*;
import threads.MainThread;
import threads.UpdatePlayerStat;


import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static java.lang.Thread.sleep;
import static parseStatistics.ParseDataForGraphs.parseDataForGraphs;

@Controller
public class ChatController {
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) throws JSONException, SQLException, IOException, ClassNotFoundException, InterruptedException {
        Gson gson = new Gson();
        if(chatMessage.getSender().equals("2")){
            PlayerStatistics playerStatistics;
            if (PlayerStatisticsDatabase.isPlayerExists(chatMessage.getContent())) {
                if (MainThread.isPlayerUpdate(chatMessage.getContent())) {
                    sleep(2000);
                } else {
                    UpdatePlayerStat updatePlayerStat = new UpdatePlayerStat(chatMessage.getContent());
                    ExecutorService executorService = Executors.newSingleThreadExecutor();
                    executorService.execute(updatePlayerStat);
                    updatePlayerStat.setPriority(1);
                    sleep(2000);

                }
                playerStatistics = PlayerStatisticsDatabase.readFromPlayerStatisticsDataBase(chatMessage.getContent());
            } else {
                playerStatistics = ParseJSONPlayerStatistics.playerStatistics(chatMessage.getContent());
                PlayerStatisticsDatabase.addToPlayerStatisticsDatabase(playerStatistics, chatMessage.getContent());
            }
            chatMessage.setContent(gson.toJson(playerStatistics));
        }else if(chatMessage.getSender().equals("3")){
            PlayerMatchStatistics[] playerMatchStatistic;
            PlayerMatchStatistics.setMatchProcessingFlag(false);
            if (!PlayerMatchStatisticsDatabase.isMatchExists(chatMessage.getContent())) {
                playerMatchStatistic = ParseJSONPlayerMatchStatistics.parseJsonObject(chatMessage.getContent());
                PlayerMatchStatisticsDatabase.addToPlayerStatisticsDatabase(playerMatchStatistic, chatMessage.getContent());
            } else {
                playerMatchStatistic = PlayerMatchStatisticsDatabase.readFromPlaterMatchStatisticsDataBase(chatMessage.getContent());
            }
            chatMessage.setContent(gson.toJson(playerMatchStatistic));
        }else if(chatMessage.getSender().equals("1")){
            SearchResponseByName[] searchResponseByName = ParseJSONSearchResponseByName.searchByName(chatMessage.getContent());
            chatMessage.setContent(gson.toJson(searchResponseByName));
        }else if(chatMessage.getSender().equals("4")){
            DataForGraphs dataForGraphs;
            if (!DataForGraphsDatabase.isMatchExists(chatMessage.getContent())) {
                dataForGraphs = parseDataForGraphs(chatMessage.getContent());
                PlayerMatchStatistics[] playerMatchStatistics;
                PlayerMatchStatistics.setMatchProcessingFlag(true);
                playerMatchStatistics = ParseJSONPlayerMatchStatistics.parseJsonObject(chatMessage.getContent());
                PlayersDataForGraphs[] playersDataForGraphs = new PlayersDataForGraphs[10];
                for(int i=0;i<10;i++){
                    playersDataForGraphs[i] = new PlayersDataForGraphs();
                    playersDataForGraphs[i].setHeroID(playerMatchStatistics[i].getHero_id());
                    playersDataForGraphs[i].setPlayersGold(playerMatchStatistics[i].getGoldChange());
                    playersDataForGraphs[i].setPlayersExp(playerMatchStatistics[i].getExpChange());
                }
                dataForGraphs.setPlayersDataForGraphs(playersDataForGraphs);
                DataForGraphsDatabase.addToDataForGraphDatabase(dataForGraphs, chatMessage.getContent());
            } else {
                dataForGraphs = DataForGraphsDatabase.readFromDataForGraphDataBase(chatMessage.getContent());
            }
            chatMessage.setContent(gson.toJson(dataForGraphs));
        }
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        System.out.println("Connected");
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
}