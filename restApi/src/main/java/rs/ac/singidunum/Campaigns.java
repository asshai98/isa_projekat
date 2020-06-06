package rs.ac.singidunum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Campaigns {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int campaign_id;

    private String name;
    private String description;
    private String starts_at;
    private String ends_at;

    public Campaigns() {
    }

    public Campaigns(int campaign_id, String name, String description, String starts_at, String ends_at) {
        this.campaign_id = campaign_id;
        this.name = name;
        this.description = description;
        this.starts_at = starts_at;
        this.ends_at = ends_at;
    }

    public int getCampaign_id() {
        return campaign_id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getStarts_at() {
        return starts_at;
    }

    public String getEnds_at() {
        return ends_at;
    }

    public void setCampaign_id(int campaign_id) {
        this.campaign_id = campaign_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStarts_at(String starts_at) {
        this.starts_at = starts_at;
    }

    public void setEnds_at(String ends_at) {
        this.ends_at = ends_at;
    }
}