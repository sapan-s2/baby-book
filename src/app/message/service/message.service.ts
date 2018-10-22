import {Injectable} from '@angular/core';
import {MessageModel} from '../model/MessageModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import {LogMessageServiceService} from '../../log-message-service.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: MessageModel[] = [];
  private BASE_URL = 'https://xfm0ap2hk3.execute-api.us-east-2.amazonaws.com/test/greeter';

  constructor(private http: HttpClient,
              private logmessageSevice: LogMessageServiceService) {

  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addMesage(messageModel: MessageModel): Observable<MessageModel> {
    const baseUrl = this.getBaseUrl();
    const objectObservable = this.http.post<MessageModel>(baseUrl, messageModel,
      this.httpOptions)
      .pipe(
        tap((msg: MessageModel) => this.log(`added message =`+ msg)),
        catchError(this.handleError<MessageModel>('addmesage'))
      );
    this.messages.push(messageModel);
    return objectObservable;
  }

  clear() {
    this.messages = [];
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
