import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {GameplayComponent} from "./gameplay/gameplay.component";
import {ProfileComponent} from "./auth/profile/profile.component";

const rute: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'gameplay', component: GameplayComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rute)],
  exports: [RouterModule]
})

export  class RoutingModule{}
