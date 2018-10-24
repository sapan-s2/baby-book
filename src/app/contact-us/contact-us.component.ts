import {Component, OnInit} from '@angular/core';
import {UserData} from '../signin/model/UserData';
import {UserDataService} from '../signin/service/user-data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  userDataForSession: UserData;

  constructor(private usrDataService: UserDataService) {
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();

  }

}
