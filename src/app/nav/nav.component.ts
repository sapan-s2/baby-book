import {Component, OnInit} from '@angular/core';
import {UserData} from '../signin/model/UserData';
import {UserDataService} from '../signin/service/user-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userDataForSession: UserData;

  constructor(private usrDataService: UserDataService) {
    this.userDataForSession = new UserData();
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    console.log(this.userDataForSession);
  }

}
