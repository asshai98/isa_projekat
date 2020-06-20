import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {GameplayComponent} from "./gameplay/gameplay.component";
import {AddComponent} from "./gameplay/add/add.component";
import {EditComponent} from "./gameplay/edit/edit.component";
import {ViewComponent} from "./gameplay/view/view.component";

import {AddCampaignComponent} from "./campaigns/add-campaign/add-campaign.component";

import {EditCampaignComponent} from "./campaigns/edit-campaign/edit-campaign.component";

const rute: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'gameplay', component: GameplayComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'character/:id', component: ViewComponent},

  {path: 'campaigns/add', component: AddCampaignComponent},

  {path: 'campaigns/edit/:id', component: EditCampaignComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(rute)],
  exports: [RouterModule]
})

export  class RoutingModule{}
