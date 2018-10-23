import {Component, OnInit} from '@angular/core';
import {UserData} from '../signin/model/UserData';
import {UserDataService} from '../signin/service/user-data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  userDataForSession: UserData;

  constructor(private usrDataService: UserDataService) {
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
  }

}
