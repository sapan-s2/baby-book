import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ConfirmComponent} from './confirm/confirm.component';
import {MessageComponent} from './message/message.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular-6-social-login';
import {SigninComponent} from './signin/signin.component';
import { WallComponent } from './wall/wall.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: SigninComponent},
  {path: 'home', component: MessageComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'wall', component: WallComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'contact', component: ContactUsComponent},

];

export function getAuthServiceConfigs() {
  const appid = '341272116607588'; // for local
  // const appid = '431056247424521'; // for prod
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(appid)
      },
      // {
      //   id: GoogleLoginProvider.PROVIDER_ID,
      //   provider: new GoogleLoginProvid("Your-Google-Client-Id")
      // },
    ]
);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    MessageComponent,
    SigninComponent,
    WallComponent,
    PrivacyPolicyComponent,
    NavComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
