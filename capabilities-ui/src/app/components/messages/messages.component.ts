import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input()
  infoMessage:string;

  @Input()
  alertMessage: string;

  @Input()
  errorMessage: string;

  constructor() { 
    this.infoMessage = '';
    this.alertMessage = '';
    this.errorMessage = '';    
  }

  ngOnInit() {
  }

}
