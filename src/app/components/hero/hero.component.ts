import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private enrollSvc: EnrollService){}
  
  async enroll(){
    this.enrollSvc.open();
    await this.enrollSvc.enroll(99);
  }

  scrollToCurriculum() {
    const curriculumSection = document.getElementById('curriculum');
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
