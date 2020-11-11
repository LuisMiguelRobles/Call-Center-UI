import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversartion } from '../Models/conversation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private http: HttpClient) { }

  getConversation(): Observable<Conversartion[]> {
     return this.http.get<Conversartion[]>(environment.baseUrl + 'Conversation');
  }
}
