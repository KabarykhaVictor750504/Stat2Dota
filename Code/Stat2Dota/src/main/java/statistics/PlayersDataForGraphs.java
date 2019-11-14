package statistics;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PlayersDataForGraphs implements Serializable {
    private Integer heroID;
    private List<Integer> playersGold = new ArrayList<>();
    private List<Integer> playersExp = new ArrayList<>();

    public Integer getHeroID() {
        return heroID;
    }

    public void setHeroID(Integer heroID) {
        this.heroID = heroID;
    }

    public List<Integer> getPlayersGold() {
        return playersGold;
    }

    public void setPlayersGold(List<Integer> playersGold) {
        this.playersGold = playersGold;
    }

    public List<Integer> getPlayersExp() {
        return playersExp;
    }

    public void setPlayersExp(List<Integer> playersExp) {
        this.playersExp = playersExp;
    }
}
