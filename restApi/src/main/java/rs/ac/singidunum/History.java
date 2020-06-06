package rs.ac.singidunum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int history_id;

    private String campName;
    private String date;
    private int lasted;
    private String universe;

    public History(String campName, String date, int lasted, String universe) {
        this.campName = campName;
        this.date = date;
        this.lasted = lasted;
        this.universe = universe;
    }

    public History() {
    }

    public int getHistory_id() {
        return history_id;
    }

    public String getCampName() {
        return campName;
    }

    public String getDate() {
        return date;
    }

    public int getLasted() {
        return lasted;
    }

    public String getUniverse() {
        return universe;
    }

    public void setHistory_id(int history_id) {
        this.history_id = history_id;
    }

    public void setCampName(String campName) {
        this.campName = campName;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setLasted(int lasted) {
        this.lasted = lasted;
    }

    public void setUniverse(String universe) {
        this.universe = universe;
    }
}


