import {Component, OnInit} from '@angular/core';
import {AuthService as SocialAuthService, FacebookLoginProvider} from 'angular-6-social-login';
import {Router} from '@angular/router';
import {UserDataService} from './service/user-data.service';
import {UserData} from './model/UserData';
import {embeddedViewEnd} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService,
              private router: Router,
              private userDataService: UserDataService) {
  }

  ngOnInit() {
  }

  public facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        console.log(userData.email);
        this.sendToRestApiMethod(userData.email, userData.name, userData.image);
        this.router.navigate(['home']);
      }
    );
  }

  sendToRestApiMethod(name: string, email: string, imageURL: string): void {
    this.userDataService.setUserDataForSession(name, email, imageURL);
  }

}
