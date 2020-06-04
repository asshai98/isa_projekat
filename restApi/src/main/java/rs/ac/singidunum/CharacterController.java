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
    public List<Characters> fetchCharactersList(){
        List<Characters> characters = new ArrayList<Characters>();
        characters = characterService.fetchAllCharacters();
        return  characters;
    }


    @PostMapping ("/add")
    public Characters saveCharacter(@RequestBody Characters character){
        return characterService.saveCharacterToDB(character);
    }

    @GetMapping("/character/{character_id}")
    public Characters fetchCharacterById(@PathVariable int character_id){

        return characterService.fetchCharacterById(character_id).get();

    }

    @GetMapping("/delete/{character_id}")
    public void deleteCharById(@PathVariable int character_id){

         characterService.deleteById(character_id);

    }

}
