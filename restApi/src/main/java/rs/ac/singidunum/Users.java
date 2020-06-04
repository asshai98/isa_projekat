package rs.ac.singidunum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    private String forename;
    private String surname;
    private String email;
    private String username;
    private String password;
    private String universe;

    public Users() {
    }

    public Users(Integer id, String forename, String surname, String email, String username, String password, String universe){
        this.user_id = id;
        this.forename = forename;
        this.surname = surname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.universe = universe;
    }

    public int getId() {
        return user_id;
    }

    public String getForename() {
        return forename;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getUniverse() {
        return universe;
    }

    public void setId(int id) {
        this.user_id = id;
    }

    public void setForename(String forename) {
        this.forename = forename;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUniverse(String universe) {
        this.universe = universe;
    }
}
