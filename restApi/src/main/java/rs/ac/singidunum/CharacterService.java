package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {
    @Autowired
    private CharacterRepo characterRepo;

    public List<Characters> fetchAllCharacters(){
        return characterRepo.findAll();
    }

    public Characters saveCharacterToDB(Characters character){
        return characterRepo.save(character);
    }

    public Optional<Characters> fetchCharacterById(int character_id){
        return characterRepo.findById(character_id);
    }

    public void  deleteById(int character_id){
        try {
            characterRepo.deleteById(character_id);
        } catch (IllegalArgumentException e){
            e.printStackTrace();
        }

    }
}
