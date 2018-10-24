import { Component, OnInit } from '@angular/core';
import {WallService} from './service/wall.service';
import {WallData} from './model/WallData';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  wallData: WallData;

  constructor(private wallService: WallService) {
    this.wallData  = new WallData();
  }

  ngOnInit() {
    this.getAllMessages();
  }

  getAllMessages() {
    this.wallService.getAllMessages()
      .subscribe( data =>  this.wallData = data);
  }

}
