import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  isFeatured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeCategory: 'all' | 'beginner' | 'intermediate' | 'advanced' = 'all';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      title: 'Real-time Chat Application',
      description: 'A modern chat application with real-time messaging, user authentication, and multiple chat rooms. Features include typing indicators, message history, and user status.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'intermediate',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      features: ['Real-time messaging', 'User authentication', 'Multiple chat rooms', 'Typing indicators', 'Message history'],
      githubUrl: 'https://github.com/mern-chat-app',
      liveUrl: 'https://mern-chat-app.vercel.app',
      difficulty: 'Medium',
      duration: '3-4 weeks',
      isFeatured: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard. Complete with user reviews and order tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
      features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order management', 'Admin dashboard'],
      githubUrl: 'https://github.com/mern-ecommerce',
      liveUrl: 'https://mern-ecommerce.vercel.app',
      difficulty: 'Hard',
      duration: '6-8 weeks',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A comprehensive task management application with project organization, team collaboration, and progress tracking. Includes drag-and-drop functionality and real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'intermediate',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      features: ['Task creation & management', 'Project organization', 'Team collaboration', 'Progress tracking', 'Real-time updates'],
      githubUrl: 'https://github.com/mern-task-manager',
      liveUrl: 'https://mern-task-manager.vercel.app',
      difficulty: 'Medium',
      duration: '4-5 weeks',
      isFeatured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A social media management dashboard with analytics, content scheduling, and engagement tracking. Features include data visualization and automated posting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'Cron Jobs'],
      features: ['Analytics dashboard', 'Content scheduling', 'Engagement tracking', 'Data visualization', 'Automated posting'],
      githubUrl: 'https://github.com/mern-social-dashboard',
      liveUrl: 'https://mern-social-dashboard.vercel.app',
      difficulty: 'Hard',
      duration: '8-10 weeks',
      isFeatured: false
    },
    {
      id: 5,
      title: 'Recipe Management App',
      description: 'A recipe sharing and management platform where users can create, share, and discover recipes. Includes search functionality, ratings, and meal planning.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'beginner',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Recipe creation', 'Search & filter', 'User ratings', 'Meal planning', 'Social sharing'],
      githubUrl: 'https://github.com/mern-recipe-app',
      liveUrl: 'https://mern-recipe-app.vercel.app',
      difficulty: 'Easy',
      duration: '2-3 weeks',
      isFeatured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'A comprehensive LMS for online education with course management, student progress tracking, and interactive assessments. Includes video streaming and discussion forums.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3', 'WebRTC'],
      features: ['Course management', 'Video streaming', 'Progress tracking', 'Assessments', 'Discussion forums'],
      githubUrl: 'https://github.com/mern-lms',
      liveUrl: 'https://mern-lms.vercel.app',
      difficulty: 'Hard',
      duration: '10-12 weeks',
      isFeatured: true
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, historical data, and interactive maps. Features include weather alerts and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'beginner',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'OpenWeather API'],
      features: ['Weather forecasts', 'Location tracking', 'Historical data', 'Weather alerts', 'Interactive maps'],
      githubUrl: 'https://github.com/mern-weather-app',
      liveUrl: 'https://mern-weather-app.vercel.app',
      difficulty: 'Easy',
      duration: '2-3 weeks',
      isFeatured: false
    },
    {
      id: 8,
      title: 'Fitness Tracking Platform',
      description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features. Includes nutrition tracking and goal setting.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'intermediate',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      features: ['Workout planning', 'Progress tracking', 'Nutrition logging', 'Goal setting', 'Social features'],
      githubUrl: 'https://github.com/mern-fitness-app',
      liveUrl: 'https://mern-fitness-app.vercel.app',
      difficulty: 'Medium',
      duration: '5-6 weeks',
      isFeatured: false
    },
    {
      id: 9,
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop portfolio website builder with customizable templates and themes. Users can create professional portfolios without coding knowledge.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'intermediate',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'React DnD'],
      features: ['Drag-and-drop editor', 'Customizable templates', 'Theme selection', 'SEO optimization', 'Analytics'],
      githubUrl: 'https://github.com/mern-portfolio-builder',
      liveUrl: 'https://mern-portfolio-builder.vercel.app',
      difficulty: 'Medium',
      duration: '4-5 weeks',
      isFeatured: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeCategory);
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.isFeatured);
  }

  get beginnerProjects(): Project[] {
    return this.projects.filter(project => project.category === 'beginner');
  }

  get intermediateProjects(): Project[] {
    return this.projects.filter(project => project.category === 'intermediate');
  }

  get advancedProjects(): Project[] {
    return this.projects.filter(project => project.category === 'advanced');
  }

  setCategory(category: 'all' | 'beginner' | 'intermediate' | 'advanced') {
    this.activeCategory = category;
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
  }

  closeProjectModal() {
    this.selectedProject = null;
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Easy': return '#22c55e';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#ef4444';
      default: return '#6b7280';
    }
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  }

  scrollToEnroll() {
    // Scroll to pricing or enroll section
    const pricingSection = document.querySelector('app-pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
}
