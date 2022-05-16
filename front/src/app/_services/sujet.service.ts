import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.entity';
import { Sujet } from '../models/sujet.entity';

@Injectable({
  providedIn: 'root',
})
export class SujetService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Sujet[]>(`${environment.apiBaseUrl}/sujets`);
  }

  findById(id: string) {
    return this.http.get<Sujet>(`${environment.apiBaseUrl}/sujets/${id}`);
  }

  create(sujet: Sujet) {
    return this.http.post<Sujet>(`${environment.apiBaseUrl}/sujets`, sujet);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/sujets/${id}`);
  }

  update(sujet: Sujet) {
    return this.http.put<Sujet>(`${environment.apiBaseUrl}/sujets`, sujet);
  }
  like(id: string) {
    return this.http.get(`${environment.apiBaseUrl}/sujets/${id}/like`);
  }
  unlike(id: string) {
    return this.http.get(`${environment.apiBaseUrl}/sujets/${id}/unlike`);
  }

  postMessage(id: string, message: Message) {
    return this.http.post(
      `${environment.apiBaseUrl}/sujets/${id}/messages`,
      message
    );
  }
}
