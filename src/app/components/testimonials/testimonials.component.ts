import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl: string;
  rating: number;
  projectLink?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      quote: 'The MERN course was a game-changer! I went from beginner to building a full-stack e-commerce platform in weeks.',
      author: 'Emma L.',
      role: 'Junior Developer',
      company: 'GrowEasy Solutions',
      avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      projectLink: 'https://github.com/emmal/ecommerce-app',
    },
    {
      quote: 'Thanks to this course, I mastered React and Node.js, securing a role at a top tech firm!',
      author: 'Liam S.',
      role: 'Full-Stack Engineer',
      company: 'TechTrend Innovations',
      avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
      rating: 5,
    },
    {
      quote: 'The practical projects and mentorship helped me deploy a real-time chat app with confidence.',
      author: 'Olivia M.',
      role: 'Software Developer',
      company: 'ConnectSphere',
      avatarUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
      rating: 5,
      projectLink: 'https://github.com/oliviam/chat-app',
    },
  ];

  currentIndex = 0;
  private autoScrollInterval: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextTestimonial();
    }, 3000); // 3 seconds
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  prevTestimonial() {
    this.stopAutoScroll();
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.startAutoScroll();
  }

  nextTestimonial() {
    this.stopAutoScroll();
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.startAutoScroll();
  }

  goToTestimonial(index: number) {
    this.stopAutoScroll();
    this.currentIndex = index;
    this.startAutoScroll();
  }
}
