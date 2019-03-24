import {Component, OnInit, HostListener, OnDestroy} from '@angular/core';
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
export class WallComponent implements OnInit, OnDestroy {

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
    this.lastEvaluatedKey = new LastEvaluatedKey();
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    this.getAllMessagesByTime();
    // window.addEventListener('scroll', this.populate, true);
  }

  ngOnDestroy(){
    window.removeEventListener('scroll', this.populate, true);
  }



getAllMessagesByTime() {
  this.loader = 'loader';
  this.wallService.getAllMessages(this.key)
    .subscribe( data => {
      if( data !== undefined && data.data !== undefined) {
        if (data.data.LastEvaluatedKey !== undefined) {
          this.lastEvaluatedKey = new LastEvaluatedKey(data.data.LastEvaluatedKey.year,data.data.LastEvaluatedKey.epoch)
          // this.lastEvaluatedKey.epoch = data.data.LastEvaluatedKe.epoch;
          // this.lastEvaluatedKey.year = data.data.LastEvaluatedKe.year;
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
        else{
          this.lastEvaluatedKey = undefined;
        }
        let wallDataOld = this.wallData;
        let wallDataNew =
          data.data.Items.sort((a, b) => {
              return new Date(a.time) == new Date(b.time) ? 0
                : new Date(a.time) < new Date(b.time) ? 1 : -1
            }
          )
        this.wallData = [...wallDataNew, ...wallDataOld];
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
populate() {
    while (true) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (windowRelativeBottom > document.documentElement.clientHeight + 100)
        break;
      else if (this.lastEvaluatedKey === undefined) {
        console.log("breaking with lastEvaluatedKey === undefined" + this.lastEvaluatedKey)
        break;
      }
      else {
        console.log("in pouplate for next data" + this.lastEvaluatedKey);
        this.previousKey = this.key;
        let key1 = this.lastEvaluatedKey;
        this.lastEvaluatedKey = undefined;
        // document.body.insertAdjacentHTML("beforeend", `<p> {{this.getAllMessagesByTime1(key1)}} </p>`);}
        this.getAllMessagesByTime1(key1);
        break;
      }
    }
//  @HostListener('window:scroll', ['$event'])
//  scrolled()
// {
//   var count=0;
//   var o = event.target;
//   //visible height + pixel scrolled = total height
//   if(  event.target.documentElement.scrollTop + event.currentTarget.innerHeight  === event.target.documentElement.offsetHeight)
//   // if(o.offsetHeight  == o.scrollLeft)
//   {
//     this.previousKey = this.key;
//     this.key = this.lastEvaluatedKey;
//     // this.key= ""
//     // this.getAllMessagesByTime1(this.lastEvaluatedKey);
//
//     this.wallService.getAllMessages(this.lastEvaluatedKey)
//       .subscribe( data => {
//
//         if( data !== undefined && data.data !== undefined) {
//           this.loader = 'loader';
//           if (data.data.LastEvaluatedKey !== undefined) {
//             this.lastEvaluatedKey = data.data.LastEvaluatedKey;
//           }
//
//           this.wallData =
//             data.data.Items.sort((a, b) => {
//
//
//                 return new Date(a.time) == new Date(b.time) ? 0
//                   : new Date(a.time) < new Date(b.time) ? 1 : -1
//               }
//             )
//
//         }
//         this.loader = 'false';
//        count++;
//       });
//     // alert(" reached End " +event.target.documentElement.scrollTop + " + " + event.currentTarget.innerHeight+ " == " +event.target.documentElement.offsetHeight);
//     console.log(count + " reached End " + window.pageYOffset + " "  +   " " + event.target.documentElement.scrollTop + " + " + event.currentTarget.innerHeight+ " == " +event.target.documentElement.offsetHeight);
//   }
//   if(event.target.documentElement.scrollTop === 0  ) {
//    // alert?("Reached Top ");
//     if(this.previousKey !== undefined)
//       // this.key = this.previousKey
//     this.wallService.getAllMessages(this.previousKey)
//       .subscribe( data => {
//         if( data !== undefined && data.data !== undefined) {
//           if (data.data.LastEvaluatedKey !== undefined) {
//             this.lastEvaluatedKey = data.data.LastEvaluatedKey;
//           }
//           this.wallData =
//             data.data.Items.sort((a, b) => {
//                 return new Date(a.time) == new Date(b.time) ? 0
//                   : new Date(a.time) < new Date(b.time) ? 1 : -1
//               }
//             )
//         }
//         this.loader = 'false';
//       });
//
//   }
// }
  }
}
