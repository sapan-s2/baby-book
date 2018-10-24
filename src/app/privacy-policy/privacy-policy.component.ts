import { Component, OnInit } from '@angular/core';
import {UserData} from '../signin/model/UserData';
import {UserDataService} from '../signin/service/user-data.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  userDataForSession: UserData;


  constructor(private usrDataService: UserDataService) { }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
  }

}
