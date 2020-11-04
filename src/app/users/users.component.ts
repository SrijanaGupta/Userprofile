import { Component, OnInit } from '@angular/core';
import { FetchUserDetailsService } from '../fetch-user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userservice: FetchUserDetailsService,
    private route: Router
  ) {}
  userDetails = [];
  userRetreived: boolean = false;

  ngOnInit(): void {
    console.log(this.userRetreived);
    this.userservice.getUserDetails().subscribe((data) => {
      console.log(data);
      this.userDetails.push(...data.data);
      this.userRetreived = true;
      console.log(this.userDetails);
      console.log(this.userRetreived);
    });
  }

  sorting(e) {
    console.log(e.target.outerText);
    if (e.target.outerText === 'First Name') {
      this.userDetails.forEach((element) => console.log(element.first_name));
      this.userDetails.sort((a, b) =>
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
      );
    } else if (e.target.outerText === 'Last Name') {
      this.userDetails.sort((a, b) =>
        a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
      );
    } else if (e.target.outerText === 'None') {
      this.userDetails.sort((a, b) => a.id - b.id);
    }
  }

  goToProfilePage(e) {
    console.log(e);
    console.log(e.id);
    this.route.navigate(['/userProfile'],{queryParams:{id:e.id}});
  }
}
