package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    @GetMapping("/gameplay")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Characters> fetchCharactersList(){
        List<Characters> characters = new ArrayList<Characters>();
        characters = characterService.fetchAllCharacters();
        return  characters;
    }


    @PostMapping ("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public Characters saveCharacter(@RequestBody Characters character){
        return characterService.saveCharacterToDB(character);
    }

    @GetMapping("/character/{character_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Characters fetchCharacterById(@PathVariable int character_id){

        return characterService.fetchCharacterById(character_id).get();

    }

    @GetMapping("/delete/{character_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteCharById(@PathVariable int character_id){

         characterService.deleteById(character_id);

    }

}
