import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {GameplayComponent} from "./gameplay/gameplay.component";
import {ProfileComponent} from "./auth/profile/profile.component";
import {AddComponent} from "./gameplay/add/add.component";
import {EditComponent} from "./gameplay/edit/edit.component";
import {ViewComponent} from "./gameplay/view/view.component";
import {DeleteComponent} from "./gameplay/delete/delete.component";

const rute: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'gameplay', component: GameplayComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'character/:id', component: ViewComponent},
  {path: 'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rute)],
  exports: [RouterModule]
})

export  class RoutingModule{}
