import {Component, OnInit} from '@angular/core';
import {UserData} from '../signin/model/UserData';
import {UserDataService} from '../signin/service/user-data.service';
import {UserAuthService} from '../signin/service/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userDataForSession: UserData;

  constructor(private router: Router,
              private usrDataService: UserDataService,
              private userAuth: UserAuthService) {
    this.userDataForSession = new UserData();
  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
    console.log(this.userDataForSession);
  }

  logout() {
    this.userAuth.facebookLogOut();
    // this.router.navigateByUrl('/login');
  }

}
