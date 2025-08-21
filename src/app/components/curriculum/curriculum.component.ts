import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  title: string;
  duration: string;
  points?: string[];
}

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent {
  openIndexes = new Set<number>();

  sections: Item[] = [
    {
      title: 'Introduction to MERN Stack',
      duration: 'Week 1',
      points: [
        'Overview of MERN Stack (MongoDB, Express.js, React.js, Node.js)',
        'Client-Server Architecture & REST APIs',
        'Setting up environment: Node.js, npm, MongoDB, React CLI',
        'Intro to Git & GitHub for version control',
      ],
    },
    {
      title: 'Frontend Development with React.js',
      duration: 'Weeks 2 - 4',
      points: [
        'React Basics: JSX, Components, Props & State',
        'Hooks: useState, useEffect, Context API',
        'React Router for navigation',
        'State management with Redux Toolkit',
        'UI libraries: Material-UI, Tailwind',
        'Connecting React with APIs using Axios',
      ],
    },
    {
      title: 'Backend Development with Node.js & Express.js',
      duration: 'Weeks 5 - 6',
      points: [
        'Node.js async programming',
        'Building APIs with Express.js',
        'Routing, Middleware & Error Handling',
        'JWT Authentication & Role-based Access',
        'Sessions, Cookies & Security best practices',
      ],
    },
    {
      title: 'Database Management with MongoDB',
      duration: 'Week 7',
      points: [
        'CRUD operations with MongoDB & Mongoose',
        'Schema design & Data modeling',
        'Indexes, Aggregations & Optimization',
        'Relationships & data normalization',
        'Database security best practices',
      ],
    },
    {
      title: 'Full-Stack Integration',
      duration: 'Weeks 8 - 9',
      points: [
        'Connecting React frontend with Node.js backend',
        'Authentication flow with JWT',
        'File uploads & Image handling',
        'Real-time communication with Socket.io',
      ],
    },
    {
      title: 'Deployment & DevOps',
      duration: 'Week 10',
      points: [
        'Hosting MERN apps on Vercel/Heroku/AWS',
        'CI/CD with GitHub Actions',
        'Containerization with Docker',
        'Monitoring & Scaling strategies',
      ],
    },
    {
      title: 'Capstone Project & Career Prep',
      duration: 'Weeks 11 - 12',
      points: [
        'Build a complete MERN project (E-commerce or Social Media)',
        'Deploy project live & showcase portfolio',
        'Resume building & interview prep',
        'Career guidance & job assistance',
      ],
    },
  ];

  toggle(i: number) {
    if (this.openIndexes.has(i)) {
      this.openIndexes.delete(i);
    } else {
      this.openIndexes.add(i);
    }
  }
}
