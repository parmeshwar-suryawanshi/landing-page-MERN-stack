import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SambanovaService } from '../../services/sombanova.service';

interface Msg { text: string; isBot: boolean; }

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isOpen = false;
  input = '';
  messages: Msg[] = [
    { text: 'Hi! Ask me anything about MERN Stack development.', isBot: true }
  ];

  constructor(private samba: SambanovaService) {}

  toggle() { this.isOpen = !this.isOpen; }

  send() {
    const t = this.input.trim();
    if (!t) return;

    this.messages.push({ text: t, isBot: false });
    this.input = '';

    this.samba.sendMessage(t).subscribe({
      next: (reply) => this.messages.push({ text: reply, isBot: true }),
      error: () => this.messages.push({ text: 'Error connecting to SambaNova API.', isBot: true })
    });
  }
}
