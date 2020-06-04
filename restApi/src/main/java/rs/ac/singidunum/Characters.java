package rs.ac.singidunum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Characters {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int character_id;

    private String name;
    private String age;
    private String clas;
    private String race;
    private String username;

    public Characters(int character_id, String name, String age, String clas, String race, String username) {
        this.character_id = character_id;
        this.name = name;
        this.age = age;
        this.clas = clas;
        this.race = race;
        this.username = username;
    }

    public Characters() {
    }

    public int getCharacter_id() {
        return character_id;
    }

    public String getName() {
        return name;
    }

    public String getAge() {
        return age;
    }

    public String getClas() {
        return clas;
    }

    public String getRace() {
        return race;
    }

    public String getUsername() {
        return username;
    }

    public void setCharacter_id(int character_id) {
        this.character_id = character_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setClas(String clas) {
        this.clas = clas;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
