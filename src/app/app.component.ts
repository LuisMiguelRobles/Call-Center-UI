import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Conversartion } from './Models/conversation.model';
import { ConversationsService } from './Services/conversations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CallCenter';
  public conversations: Conversartion[];

  constructor(
    private conversationService: ConversationsService,
    ngbRatingConfig: NgbRatingConfig) {
    ngbRatingConfig.max = 5;
    ngbRatingConfig.readonly = true;
  }

  ngOnInit(): void {
    this.conversationService.getConversation()
    .subscribe(response => {
      if (response) {
        this.conversations = response;
      }
    },
    error => {
      console.error(`An error has occurred: ${error}`);
    });
  }


}
