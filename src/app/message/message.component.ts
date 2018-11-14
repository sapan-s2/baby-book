import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessagesService} from './service/message.service';
import {MessageModel} from './model/MessageModel';
import {UserDataService} from '../signin/service/user-data.service';
import {UserData} from '../signin/model/UserData';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
  messageModel: MessageModel;
  messageModels: MessageModel[];
  userDataForSession: UserData;
  title: string;

  constructor(private router: Router,
              private messageService: MessagesService,
              private usrDataService: UserDataService) {
    this.title = 'Sia';

  }

  ngOnInit() {
    this.userDataForSession = this.usrDataService.getUserDataForSession();
  }

  submitMessageForUser(message, email, name, imageUrl): void {
    this.messageModel = new MessageModel();
    this.messageModel.set_message(message);
    this.messageModel.set_emailId(email);
    this.messageModel.set_userName(name);
    this.messageModel.set_userProfileURL(imageUrl);
    this.messageModel.set_userProfileURLSource('Facebook');
    this.messageService.addMesage(this.messageModel).subscribe(
      data => { console.log(data);
    this.router.navigate(['/confirm']);
      },
      err =>     this.router.navigate(['/confirm'])
  );
  }

  submitMessageForPublic(message, email, name, imageUrl): void {
    this.messageModel = new MessageModel();
    this.messageModel.set_message(message);
    this.messageModel.set_emailId(email);
    this.messageModel.set_userName(name);
    this.messageModel.set_userProfileURL(imageUrl);
    this.messageService.addMesage(this.messageModel).subscribe(data => console.log(data)
    );
    this.router.navigate(['/confirm']);
  }

}
