import { Component, OnInit } from '@angular/core';
import {WallService} from './service/wall.service';
import {WallData} from './model/WallData';
import {UserDataService} from '../signin/service/user-data.service';
import {UserData} from '../signin/model/UserData';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  wallData: any;
  userDataForSession: UserData;

  constructor(private wallService: WallService,
              private usrDataService: UserDataService) {
    this.wallData  = new WallData();
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    this.getAllMessages();
  }

  getAllMessages() {
    this.wallService.getAllMessages()
      .subscribe( data =>  this.wallData = data);
  }

}
