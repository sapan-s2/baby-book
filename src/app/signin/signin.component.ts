import {Component, OnInit} from '@angular/core';
import {AuthService as SocialAuthService, FacebookLoginProvider} from 'angular-6-social-login';
import {Router} from '@angular/router';
import {UserDataService} from './service/user-data.service';
import {UserData} from './model/UserData';
import {embeddedViewEnd} from '@angular/core/src/render3/instructions';
import {UserAuthService} from './service/user-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userAuth: UserAuthService) {
  }

  ngOnInit() {
  }

  public facebookLogin() {
    this.userAuth.facebookLogin();
  }

  public facebookLogOut() {
    this.userAuth.facebookLogOut();
  }

}
