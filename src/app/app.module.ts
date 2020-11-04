import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchUserDetailsService} from './fetch-user-details.service';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchUserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
