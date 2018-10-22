import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMessageServiceService {


  logData: string[] = [];

  constructor() { }

  add(message: string) {
    this.logData.push(message);
  }

  clear() {
    this.logData = [];
  }
}
