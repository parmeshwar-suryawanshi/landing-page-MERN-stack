import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Msg { text: string; isBot: boolean; }

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isOpen = false;
  input = '';
  messages: Msg[] = [
    { text: 'Hi! Ready to dive into MERN Stack? Ask about React hooks, Node APIs, or anything!', isBot: true }
  ];

  toggle(){ this.isOpen = !this.isOpen; }
  send(){
    const t = this.input.trim();
    if(!t) return;
    this.messages.push({ text: t, isBot: false });
    // Simulated response
    this.messages.push({ text: 'Awesome! In MERN, we cover full integration. For example, connecting React to MongoDB via Express. Need syllabus details?', isBot: true });
    this.input = '';
  }
}
