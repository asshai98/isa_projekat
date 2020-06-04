package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PostMapping ("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public Users registerUser(@RequestBody Users user) throws Exception{
        String tempEmail = user.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)){
            Users userObj = userService.fetchUserByEmail(tempEmail);
            if(userObj != null){
                throw new Exception("User with " + tempEmail + " already exists!");
            }
        }
        Users userObj = null;
        userObj = userService.saveUser(user);
        return userObj;
    }

    @PostMapping ("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public Users loginUser(@RequestBody Users user) throws Exception{
        String tempUsername = user.getUsername();
        String tempPassword = user.getPassword();
        Users usersObj = null;
        if(tempUsername != null && tempPassword != null){
            usersObj = userService.fetchUserByUsernameAndPassword(tempUsername, tempPassword);
        }

        if (usersObj == null) {
            throw new Exception("Bad credintials!");
        }

        return usersObj;
    }

}
