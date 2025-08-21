import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SambanovaService {
  private API_URL = 'https://api.sambanova.ai/v1/chat/completions';
  private API_TOKEN = 'da5e419d-8200-4ac5-bd1c-eedeb36e6877'; // keep secret in production
  private MODEL = 'DeepSeek-V3-0324';

  // To maintain conversation history
  private conversation: { role: string, content: string }[] = [
    { role: 'system', content: 'You are a helpful assistant specialized in MERN Stack development only.' }
  ];

  constructor(private http: HttpClient) {}

  sendMessage(userMessage: string): Observable<string> {
    this.conversation.push({ role: 'user', content: userMessage });

    const body = {
      model: this.MODEL,
      messages: this.conversation
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.API_TOKEN}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.API_URL, body, { headers }).pipe(
      map(res => {
        const reply = res.choices?.[0]?.message?.content || 'Sorry, I could not process your request.';
        this.conversation.push({ role: 'assistant', content: reply });
        return reply;
      })
    );
  }
}
