import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private enrollSvc: EnrollService){}
  
  async enroll(){
    this.enrollSvc.open();
    await this.enrollSvc.enroll(99);
  }
}
