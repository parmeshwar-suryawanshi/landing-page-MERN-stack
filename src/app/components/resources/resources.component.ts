import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Resource {
  title: string;
  description: string;
  icon: string;
  category: 'free' | 'premium' | 'community';
  link?: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  email = '';
  submitted = false;
  activeTab: 'free' | 'premium' | 'community' = 'free';
  isLoading = false;

  resources: Resource[] = [
    // Free Resources
    {
      title: 'MERN Starter Template',
      description: 'Complete boilerplate with authentication, database setup, and deployment config',
      icon: 'fas fa-rocket',
      category: 'free',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Weekly Coding Challenges',
      description: 'Real-world problems to practice your MERN skills with solutions',
      icon: 'fas fa-code',
      category: 'free',
      link: '#',
      isAvailable: true
    },
    {
      title: 'MERN Cheat Sheet',
      description: 'Quick reference guide for MongoDB, Express, React, and Node.js',
      icon: 'fas fa-book',
      category: 'free',
      link: '#',
      isAvailable: true
    },
    {
      title: 'API Testing Collection',
      description: 'Postman collection with all the APIs you\'ll build in the course',
      icon: 'fas fa-database',
      category: 'free',
      link: '#',
      isAvailable: true
    },
    {
      title: 'VS Code Extensions Pack',
      description: 'Curated extensions for better MERN development experience',
      icon: 'fas fa-puzzle-piece',
      category: 'free',
      link: '#',
      isAvailable: true
    },
    {
      title: 'GitHub Repository Templates',
      description: 'Pre-configured repos with CI/CD, linting, and testing setup',
      icon: 'fab fa-github',
      category: 'free',
      link: '#',
      isAvailable: true
    },

    // Premium Resources
    {
      title: 'Advanced Project Templates',
      description: 'Production-ready templates for e-commerce, social media, and SaaS apps',
      icon: 'fas fa-crown',
      category: 'premium',
      link: '#',
      isAvailable: true
    },
    {
      title: '1-on-1 Code Reviews',
      description: 'Personal feedback on your projects from industry experts',
      icon: 'fas fa-user-graduate',
      category: 'premium',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Exclusive Workshop Access',
      description: 'Live workshops on advanced topics like microservices and scaling',
      icon: 'fas fa-chalkboard-teacher',
      category: 'premium',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Resume & Portfolio Review',
      description: 'Professional review and optimization of your developer portfolio',
      icon: 'fas fa-file-alt',
      category: 'premium',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Job Placement Assistance',
      description: 'Direct connections to hiring managers and tech companies',
      icon: 'fas fa-briefcase',
      category: 'premium',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Lifetime Course Updates',
      description: 'Access to all future course updates and new content',
      icon: 'fas fa-infinity',
      category: 'premium',
      link: '#',
      isAvailable: true
    },

    // Community Resources
    {
      title: 'Discord Community',
      description: 'Join 10,000+ MERN developers for networking and support',
      icon: 'fab fa-discord',
      category: 'community',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Weekly Live Q&A',
      description: 'Ask questions and get answers from instructors and peers',
      icon: 'fas fa-comments',
      category: 'community',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Study Groups',
      description: 'Form study groups with other students for accountability',
      icon: 'fas fa-users',
      category: 'community',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Hackathon Events',
      description: 'Participate in MERN-focused hackathons and competitions',
      icon: 'fas fa-trophy',
      category: 'community',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Mentorship Program',
      description: 'Connect with senior developers for career guidance',
      icon: 'fas fa-handshake',
      category: 'community',
      link: '#',
      isAvailable: true
    },
    {
      title: 'Open Source Projects',
      description: 'Contribute to real MERN projects and build your portfolio',
      icon: 'fas fa-code-branch',
      category: 'community',
      link: '#',
      isAvailable: true
    }
  ];

  get filteredResources(): Resource[] {
    return this.resources.filter(resource => resource.category === this.activeTab);
  }

  get freeResources(): Resource[] {
    return this.resources.filter(resource => resource.category === 'free');
  }

  get premiumResources(): Resource[] {
    return this.resources.filter(resource => resource.category === 'premium');
  }

  get communityResources(): Resource[] {
    return this.resources.filter(resource => resource.category === 'community');
  }

  submit() {
    if (this.email && /.+@.+\..+/.test(this.email)) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        this.submitted = true;
        this.isLoading = false;
        this.email = '';
      }, 1500);
    }
  }

  setTab(tab: 'free' | 'premium' | 'community') {
    this.activeTab = tab;
  }

  downloadResource(resource: Resource) {
    if (resource.isAvailable && resource.link) {
      // Simulate download
      console.log(`Downloading: ${resource.title}`);
      // In real app, this would trigger actual download
    }
  }

  joinCommunity() {
    // Simulate joining community
    console.log('Joining community...');
    window.open('https://discord.gg/mern-community', '_blank');
  }
}
