import {Injectable} from '@angular/core';
import {UserData} from '../model/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData: UserData;

  constructor() {
    this.userData = new UserData();
  }

  public setUserDataForSession(email: string, name: string, imageURL: string, loginStatus: boolean): UserData {
    this.userData.emailId = email;
    this.userData.name = name;
    this.userData.imageURL = imageURL;
    this.userData.loginStatus = loginStatus;
    return  this.userData;
  }

  public getUserDataForSession() {
    return this.userData;
  }
}
