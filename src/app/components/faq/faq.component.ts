import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  q: string;
  a: string;
  category: 'general' | 'technical' | 'career' | 'payment';
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  open: number | null = null;
  activeCategory: 'all' | 'general' | 'technical' | 'career' | 'payment' = 'all';
  
  allItems: FAQItem[] = [
    // General Questions
    { 
      q: 'Do I need prior programming experience?', 
      a: 'Basic JavaScript knowledge is helpful, but we cover all fundamentals from scratch! Our course is designed for beginners with step-by-step guidance. If you can write simple JavaScript, you\'re ready to start!',
      category: 'general'
    },
    { 
      q: 'What tools and software will I need?', 
      a: 'You\'ll need a computer with Node.js, VS Code (free), MongoDB (free), and internet connection. We provide detailed setup guides and all tools are completely free to download and use.',
      category: 'general'
    },
    { 
      q: 'How long does the course take to complete?', 
      a: 'The course is designed for 12 weeks with 8-10 hours per week. However, you can learn at your own pace - some students complete it faster, others take more time. You get lifetime access to all materials.',
      category: 'general'
    },
    { 
      q: 'Is this course suitable for absolute beginners?', 
      a: 'Yes! We start from the very basics and gradually build up to advanced concepts. Each module includes hands-on exercises and real-world projects to reinforce learning.',
      category: 'general'
    },
    
    // Technical Questions
    { 
      q: 'Is the course content up-to-date with current technologies?', 
      a: 'Absolutely! Our course is updated for 2025 with the latest React 18 features, Node.js 20+, modern JavaScript (ES6+), and current deployment best practices. We regularly update content to stay current.',
      category: 'technical'
    },
    { 
      q: 'What projects will I build during the course?', 
      a: 'You\'ll build 5+ real-world projects including an e-commerce platform, social media app, task management system, and a portfolio website. Each project teaches different aspects of full-stack development.',
      category: 'technical'
    },
    { 
      q: 'Do you cover database design and optimization?', 
      a: 'Yes! We cover MongoDB schema design, data modeling, indexing, aggregation pipelines, and performance optimization. You\'ll learn both basic CRUD operations and advanced database concepts.',
      category: 'technical'
    },
    { 
      q: 'Will I learn about authentication and security?', 
      a: 'Definitely! We cover JWT authentication, password hashing, role-based access control, input validation, and security best practices. Security is crucial for any production application.',
      category: 'technical'
    },
    { 
      q: 'Do you teach deployment and DevOps?', 
      a: 'Yes! We cover deployment to platforms like Vercel, Heroku, and AWS. You\'ll also learn about CI/CD pipelines, Docker containerization, and monitoring strategies for production applications.',
      category: 'technical'
    },
    
    // Career Questions
    { 
      q: 'What job opportunities will this course open up?', 
      a: 'This course prepares you for roles like Full-Stack Developer, MERN Stack Developer, Frontend Developer, Backend Developer, and Web Application Developer. MERN stack developers are in high demand globally.',
      category: 'career'
    },
    { 
      q: 'Do you provide career guidance and job assistance?', 
      a: 'Yes! We include resume building workshops, interview preparation, portfolio development, and networking tips. Our community also shares job opportunities and career advice.',
      category: 'career'
    },
    { 
      q: 'What\'s the average salary for MERN stack developers?', 
      a: 'MERN stack developers typically earn $60,000-$120,000 annually depending on experience and location. Entry-level positions start around $50,000, while senior developers can earn $100,000+.',
      category: 'career'
    },
    { 
      q: 'Can I work as a freelancer after this course?', 
      a: 'Absolutely! Many of our students start freelancing immediately after completing the course. We teach you how to find clients, price your services, and manage freelance projects effectively.',
      category: 'career'
    },
    
    // Payment Questions
    { 
      q: 'What\'s included in the course price?', 
      a: 'You get lifetime access to all course materials, 5+ real-world projects, 1-on-1 mentorship sessions, community access, job assistance, and free updates. No hidden fees or recurring payments.',
      category: 'payment'
    },
    { 
      q: 'Do you offer payment plans or discounts?', 
      a: 'Yes! We offer flexible payment plans and student discounts. Contact us for special pricing options. We also have a 30-day money-back guarantee if you\'re not satisfied.',
      category: 'payment'
    },
    { 
      q: 'Is there a free trial or sample content?', 
      a: 'Yes! We offer free preview lessons and a sample project to help you decide. You can also join our free community to see what others are building and ask questions.',
      category: 'payment'
    },
    { 
      q: 'What if I get stuck or need help?', 
      a: 'We provide 1-on-1 mentorship, community support, and detailed documentation. Our instructors and community members are always available to help you overcome challenges.',
      category: 'payment'
    }
  ];

  get filteredItems(): FAQItem[] {
    if (this.activeCategory === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => item.category === this.activeCategory);
  }

  toggle(i: number) { 
    this.open = this.open === i ? null : i; 
  }

  setCategory(category: 'all' | 'general' | 'technical' | 'career' | 'payment') {
    this.activeCategory = category;
    this.open = null; // Close any open items when changing category
  }

  scrollToContact() {
    // Scroll to footer or contact section
    const footer = document.querySelector('app-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
}
