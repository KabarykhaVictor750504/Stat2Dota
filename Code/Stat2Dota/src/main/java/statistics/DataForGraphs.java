package statistics;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class DataForGraphs implements Serializable {

    private List<Integer> netWorse = new ArrayList<>();
    private List<Integer> exp = new ArrayList<>();
    private PlayersDataForGraphs[] playersDataForGraphs;

    public PlayersDataForGraphs[] getPlayersDataForGraphs() {
        return playersDataForGraphs;
    }

    public void setPlayersDataForGraphs(PlayersDataForGraphs[] playersDataForGraphs) {
        this.playersDataForGraphs = playersDataForGraphs;
    }

    public List<Integer> getNetWorse() {
        return netWorse;
    }

    public void setNetWorse(List<Integer> netWorse) {
        this.netWorse = netWorse;
    }

    public List<Integer> getExp() {
        return exp;
    }

    public void setExp(List<Integer> exp) {
        this.exp = exp;
    }
}
