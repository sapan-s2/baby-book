import {Component, OnInit, HostListener} from '@angular/core';
import {WallService} from './service/wall.service';
import {WallData} from './model/WallData';
import {UserDataService} from '../signin/service/user-data.service';
import {UserData} from '../signin/model/UserData';
import {LastEvaluatedKey} from "./model/LastEvaluatedKey";
// import { ScrollEvent } from 'ngx-scroll-event'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  wallData: any;
  userDataForSession: UserData;
  loader: string = 'loader';
  lastEvaluatedKey: LastEvaluatedKey;
  key;
  previousKey;

  constructor(private wallService: WallService,
              private usrDataService: UserDataService) {
    this.wallData  = new WallData();
    this.loader = 'loader';
    this.key = 'begin';
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    this.getAllMessagesByTime();
  }

  getAllMessagesByTime() {
    this.loader = 'loader';
    this.wallService.getAllMessages(this.key)
      .subscribe( data => {
        if( data !== undefined && data.data !== undefined) {
          if (data.data.LastEvaluatedKey !== undefined) {
            this.lastEvaluatedKey = data.data.LastEvaluatedKey;
          }
          this.wallData =
            data.data.Items.sort((a, b) => {
                return new Date(a.time) == new Date(b.time) ? 0
                  : new Date(a.time) < new Date(b.time) ? 1 : -1
              }
            )
        }
        this.loader = 'false';
      });
  }

  getAllMessagesByTime1(key) {
    this.loader = 'loader';
    this.wallService.getAllMessages(key)
      .subscribe( data => {
        if( data !== undefined && data.data !== undefined) {
          if (data.data.LastEvaluatedKey !== undefined) {
            this.lastEvaluatedKey = data.data.LastEvaluatedKey;
          }
          this.wallData =
            data.data.Items.sort((a, b) => {
                return new Date(a.time) == new Date(b.time) ? 0
                  : new Date(a.time) < new Date(b.time) ? 1 : -1
              }
            )
        }
        this.loader = 'false';
      });
  }

  getAllMessagesByuser() {
    this.loader = 'loader';
    this.wallService.getAllMessages(this.key)
      .subscribe( data => {
        this.wallData =
        data.data.Items.sort(( a,b ) =>
          { return  a.user_name.localeCompare(b.user_name)}
      )
        this.loader = 'false';

      });
  }

  // public handleScroll(event: ScrollEvent) {
  //   // console.log('scroll occurred', event.originalEvent);
  //   if (event.isReachingBottom) {
  //     console.log(`the user is reaching the bottom`);
  //   }
  //   if (event.isReachingTop) {
  //     console.log(`the user is reaching the bottom`);
  //   }
  //   // if (event.isWindowEvent) {
  //   //   console.log(`This event is fired on Window not on an element.`);
  //   // }
  //
  // }


 @HostListener('window:scroll', ['$event'])
 scrolled(o1)
{
  var o = o1.target;
  //visible height + pixel scrolled = total height
  if(  o1.target.documentElement.scrollTop + o1.currentTarget.innerHeight  === o1.target.documentElement.offsetHeight)
  // if(o.offsetHeight  == o.scrollLeft)
  {
    this.previousKey = this.key;
    this.key = this.lastEvaluatedKey;
    // this.key= ""
    // this.getAllMessagesByTime1(this.lastEvaluatedKey);

    this.wallService.getAllMessages(this.lastEvaluatedKey)
      .subscribe( data => {

        if( data !== undefined && data.data !== undefined) {
          this.loader = 'loader';
          if (data.data.LastEvaluatedKey !== undefined) {
            this.lastEvaluatedKey = data.data.LastEvaluatedKey;
          }

          this.wallData =
            data.data.Items.sort((a, b) => {


                return new Date(a.time) == new Date(b.time) ? 0
                  : new Date(a.time) < new Date(b.time) ? 1 : -1
              }
            )

        }
        this.loader = 'false';

      });
    // alert(" reached End " +o1.target.documentElement.scrollTop + " + " + o1.currentTarget.innerHeight+ " == " +o1.target.documentElement.offsetHeight);
  }
  if(o1.target.documentElement.scrollTop === 0  ) {
   // alert?("Reached Top ");
    if(this.previousKey !== undefined)
      // this.key = this.previousKey
    this.wallService.getAllMessages(this.previousKey)
      .subscribe( data => {
        if( data !== undefined && data.data !== undefined) {
          if (data.data.LastEvaluatedKey !== undefined) {
            this.lastEvaluatedKey = data.data.LastEvaluatedKey;
          }
          this.wallData =
            data.data.Items.sort((a, b) => {
                return new Date(a.time) == new Date(b.time) ? 0
                  : new Date(a.time) < new Date(b.time) ? 1 : -1
              }
            )
        }
        this.loader = 'false';
      });

  }
}

  }
