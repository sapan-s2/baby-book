import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  submitMessage(): void {
    console.log(this.message);
    this.router.navigate(['/confirm']);
  }

}
