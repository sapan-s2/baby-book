import { Injectable } from '@angular/core';
import {AuthService as SocialAuthService, FacebookLoginProvider} from 'angular-6-social-login';
import {Router} from '@angular/router';
import {UserDataService} from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private socialAuthService: SocialAuthService,
              private router: Router,
              private userDataService: UserDataService) { }


  public facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        console.log(userData.email);
        this.sendToRestApiMethod(userData.email, userData.name, userData.image, true);
        this.router.navigate(['home']);
      }
    );
  }

  public facebookLogOut() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signOut().then((res) => {
      this.sendToRestApiMethod('', '', '', false);

    this.router.navigate(['/']);
    });
    //   .then(
    //   (userData) => {
    //
    //     console.log(userData.email);
    //     this.sendToRestApiMethod(userData.email, userData.name, userData.image);
    //     this.router.navigate(['home']);
    //   }
    // )
    // ;

  }

  sendToRestApiMethod(name: string, email: string, imageURL: string, loginStatus: boolean): void {
    this.userDataService.setUserDataForSession(name, email, imageURL, loginStatus);
  }
}
