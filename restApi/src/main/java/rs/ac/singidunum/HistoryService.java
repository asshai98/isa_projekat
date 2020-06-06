package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoryService {

    @Autowired
    HistoryRepo historyRepo;

    public List<History> fetchAllHistories(){ return historyRepo.findAll();}

    public Optional<History> fetchHistoriesById(int history_id){
        return historyRepo.findById(history_id);
    }
}
