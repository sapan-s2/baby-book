import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MessagesService} from './service/message.service';
import {MessageModel} from './model/MessageModel';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
  messageModel: MessageModel ;
  messageModels: MessageModel[] ;

  constructor(private router: Router, private messageService: MessagesService) {

  }

  ngOnInit() {
  }

  submitMessageForUser(message, email): void {
    this.messageModel = new MessageModel();
    this.messageModel.set_message( message);
    this.messageModel.set_emailId( email);
    this.messageService.addMesage(this.messageModel).subscribe(
      data => console.log(data)
    );
    this.router.navigate(['/confirm']);
  }

  submitMessageForPublic(message, email): void {
    this.messageModel = new MessageModel();
    this.messageModel.set_message( message);
    this.messageModel.set_emailId( email);
    this.messageService.addMesage(this.messageModel).subscribe(      data => console.log(data)
  );
    this.router.navigate(['/confirm']);
  }

}
