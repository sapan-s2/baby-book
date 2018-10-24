import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';
import {MessageModel} from '../../message/model/MessageModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogMessageServiceService} from '../../log-message-service.service';
import {WallData} from '../model/WallData';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  private BASE_URL = 'https://xfm0ap2hk3.execute-api.us-east-2.amazonaws.com/test/greeter/all';

  constructor(private http: HttpClient,
              private logmessageSevice: LogMessageServiceService) { }


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAllMessages(): Observable<any> {
    const baseUrl = this.getBaseUrl();
    const objectObservable = this.http.get<WallData>(baseUrl,
      this.httpOptions)
      .pipe(
        tap((msg: WallData) => this.log(`get message =`+ msg)),
        catchError(this.handleError<WallData>('getWalldata'))
      );
    // this.messages.push(messageModel);
    return objectObservable;
  }

  private getBaseUrl() {
    return this.BASE_URL;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(log: string) {
    this.logmessageSevice.add(`messageService: ${log}`);
  }
}
