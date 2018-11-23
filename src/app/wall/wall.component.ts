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
  loader: string = 'loader';

  constructor(private wallService: WallService,
              private usrDataService: UserDataService) {
    this.wallData  = new WallData();
    this.loader = 'loader';
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    this.getAllMessagesByTime();
  }

  getAllMessagesByTime() {
    this.loader = 'loader';
    this.wallService.getAllMessages()
      .subscribe( data => {
        this.wallData =
        data.data.Items.sort(( a,b ) =>
        {
        return  new Date( a.time) == new Date (b.time) ? 0
                       : new Date (a.time)  < new Date (b.time) ? 1 : -1
      }

      )
        this.loader = 'false';
  });
  }

  getAllMessagesByuser() {
    this.loader = 'loader';
    this.wallService.getAllMessages()
      .subscribe( data => {
        this.wallData =
        data.data.Items.sort(( a,b ) =>
          { return  a.user_name.localeCompare(b.user_name)}
      )
        this.loader = 'false';

      });
  }

  }
