import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FetchUserDetailsService} from '../fetch-user-details.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private paramInRoute: ActivatedRoute, private userservice:FetchUserDetailsService) { }
  userID:any;
  userProfile:any;

  ngOnInit(): void {
    this.paramInRoute.queryParams
    .subscribe(data=>{
      console.log('Id  received in profile page component- ',data);
      this.userID=data.id;
    });

    console.log(this.userID);
    this.userservice.getUserProfileDetails(this.userID)
    .subscribe(data=>{
      this.userProfile=data.data;
      console.log(this.userProfile);});

  }

}
