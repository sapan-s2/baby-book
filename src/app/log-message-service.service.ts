import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMessageServiceService {


  logData: any[] = [];

  constructor() { }

  add(message: any) {
    this.logData.push(message);
  }

  clear() {
    this.logData = [];
  }
}
