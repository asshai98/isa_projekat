import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from "./material.module";


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SuccessComponent } from './auth/success/success.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./auth/user.service";
import {HttpClientModule} from "@angular/common/http";
import { EditComponent } from './gameplay/edit/edit.component';
import { DeleteComponent } from './gameplay/delete/delete.component';
import { ViewComponent } from './gameplay/view/view.component';
import { AddComponent } from './gameplay/add/add.component';

import {CharacterService} from "./gameplay/character.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SuccessComponent,
    WelcomeComponent,
    GameplayComponent,
    CampaignsComponent,
    EditComponent,
    DeleteComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [UserService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
