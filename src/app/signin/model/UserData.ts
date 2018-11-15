import {Injectable} from '@angular/core';

@Injectable()
export class UserData {

  private _emailId: string;
  private _name: string;
  private _imageURL: string;

  get emailId(): string {
    return this._emailId;
  }

  set emailId(value: string) {
    this._emailId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  set imageURL(value: string) {
    this._imageURL = value;
  }
}
