package rs.ac.singidunum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampaignService {
    @Autowired
    private CampaignRepo campaignRepo;

    public List<Campaigns> fetchAllCampaigns(){ return campaignRepo.findAll();}

    public Campaigns saveCampaignToDB(Campaigns campaign) { return campaignRepo.save(campaign);}

    public Optional<Campaigns> fetchCampaignsById(int campaign_id){
        return campaignRepo.findById(campaign_id);
    }

    public void deleteCampaignById(int campaign_id){
        try{
            campaignRepo.deleteById(campaign_id);
        } catch ( IllegalArgumentException e){
            e.printStackTrace();
        }
    }
}


