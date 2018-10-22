import { Component, OnInit } from '@angular/core';
import {    AuthService as SocialAuthService,    FacebookLoginProvider} from 'angular-6-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private socialAuthService: SocialAuthService,
               private router: Router) {}

  ngOnInit() {
  }

  public facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {

        console.log(userData.email);
        this.router.navigate(['home']);
        // this.sendToRestApiMethod(userData.token);
      }
    );
  }

//   sendToRestApiMethod(token: string) : void {
//     this.http.post('/login/facebook', { token: token } }
// .subscribe(onSuccess => {
//   //login was successful
// }, onFail => {
//   //login was unsuccessful
//   //show an error message
// }
// );
// }

}
