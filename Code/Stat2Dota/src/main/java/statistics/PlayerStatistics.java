package statistics;

import java.io.Serializable;
import java.util.Arrays;

public class PlayerStatistics implements Serializable {
    private String nickName;
    private Double win;
    private Double lose;
    private Double winrate;
    private MatchesPlayed[] matchesPlayeds;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Double getWin() {
        return win;
    }

    public void setWin(Double win) {
        this.win = win;
    }

    public Double getLose() {
        return lose;
    }

    public void setLose(Double lose) {
        this.lose = lose;
    }

    public Double getWinrate() {
        return winrate;
    }

    public void setWinrate(Double winrate) {
        this.winrate = winrate;
    }

    public MatchesPlayed[] getMatchesPlayeds() {
        return matchesPlayeds;
    }

    public String getStingMatchesPlayeds(MatchesPlayed[] matchesPlayeds){
        String result = "";
        for(int i=0;i<matchesPlayeds.length;i++){
          result +=  matchesPlayeds[i].toString();
        }
        return  result;
    }

    @Override
    public String toString() {
        return "PlayerStatistics{" +
                "nickName='" + nickName + '\'' +
                ", win=" + win +
                ", lose=" + lose +
                ", winrate=" + winrate +
                ", matchesPlayeds=" + getStingMatchesPlayeds(matchesPlayeds) +
                '}';
    }

    public void setMatchesPlayeds(MatchesPlayed[] matchesPlayeds) {
        this.matchesPlayeds = matchesPlayeds;
    }
}
