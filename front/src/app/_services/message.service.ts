import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.entity';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}
  create(message: Message) {
    return this.http.post<Message>(
      `${environment.apiBaseUrl}/messages`,
      message
    );
  }
  deleteById(id: string) {
    this.http.delete(`${environment.apiBaseUrl}/messages/${id}`);
  }
}
