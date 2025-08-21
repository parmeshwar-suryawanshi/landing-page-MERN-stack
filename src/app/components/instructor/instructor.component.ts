import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Instructor {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  linkedinUrl: string;
  skills: string[];
  certifications: string[];
}

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css'],
})
export class InstructorComponent {
  instructor: Instructor = {
    name: 'Jane Doe',
    title: 'Senior Full-Stack Developer',
    description:
      'Jane Doe is a seasoned MERN stack expert with over 10 years of experience building scalable applications at leading tech companies. She is an active contributor to open-source MERN projects on GitHub and a passionate mentor.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzp7QZNqS59GN9sMrDYnKX5GQz7dG6u2xHuA&s',
    linkedinUrl: 'https://linkedin.com',
    skills: ['MERN Stack', 'TypeScript', 'GraphQL', 'AWS', 'Docker'],
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
  };
}
