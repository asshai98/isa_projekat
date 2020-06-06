package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HistoryController {
    @Autowired
    HistoryService historyService;

    @GetMapping("/history")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<History> fetchCampaignsHistoryList(){
        List<History> histories = new ArrayList<History>();
        histories = historyService.fetchAllHistories();
        return  histories;
    }

    @GetMapping("/history/{history_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public History fetchHistoriesById(@PathVariable int history_id){
        return historyService.fetchHistoriesById(history_id).get();
    }
}
