import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path: 'userProfile', component:ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
