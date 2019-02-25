import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessagesService} from './service/message.service';
import {MessageModel} from './model/MessageModel';
import {UserDataService} from '../signin/service/user-data.service';
import {UserData} from '../signin/model/UserData';
import {FormControl} from '@angular/forms';
import {AutoMessageTemplate} from './model/AutoMessageTemplate';

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

  toppings = new FormControl();
  toppingList: AutoMessageTemplate[] = [new AutoMessageTemplate(1, 'Welcome to parenthood, may your new baby born bring you happiness, love and joy.'),
    new AutoMessageTemplate(2, 'Congrats! This is a rewarding experience part of your lifetime.'),
    new AutoMessageTemplate(3, 'Congratulations on the new baby, it’s always exciting to see who the baby looks like more and who traits they have inherited. Enjoy parenthood and create many memories.'),
      new AutoMessageTemplate(4, 'These baby steps will walk miles, littles ones to bigs. As parents you have big shoes to fill, you are the role model for your child.'),
      new AutoMessageTemplate(5, 'Hello little one, welcome to the world! You have the best mummy and daddy anyone could wish for. You will have everlasting love and happiness'),
      new AutoMessageTemplate(6, 'Welcome to the new chapter of your life, this chapter is a beginning of something great! It will be filled with new potentials, new discoveries, and challenges.')
  ];
  private autoTemplate: boolean;

  constructor(private router: Router,
              private messageService: MessagesService,
              private usrDataService: UserDataService) {
    this.title = 'Sia';
    this.autoTemplate = false;

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
      data => {
        console.log(data);
        this.router.navigate(['/confirm']);
      },
      err => this.router.navigate(['/confirm'])
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

  onSelect(value) {
     this.message = value;
  }

}
