package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CampaignController {

    @Autowired
    CampaignService campaignService;

    @GetMapping("/campaigns")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Campaigns> fetchCampaignsList(){
        List<Campaigns> campaigns = new ArrayList<Campaigns>();
        campaigns = campaignService.fetchAllCampaigns();
        return  campaigns;
    }

    @PostMapping("/campaigns/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public Campaigns saveCampaign(@RequestBody Campaigns campaign){
        return campaignService.saveCampaignToDB(campaign);
    }

    @GetMapping("/campaigns/{campaign_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Campaigns fetchCampaignsById(@PathVariable int campaign_id){
        return campaignService.fetchCampaignsById(campaign_id).get();
    }

    @GetMapping("campaigns/delete/{campaign_id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteCampById(@PathVariable int campaign_id){
        campaignService.deleteCampaignById(campaign_id);
    }
}
