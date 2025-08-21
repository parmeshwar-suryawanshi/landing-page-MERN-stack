import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  constructor(private enrollSvc: EnrollService) {}
  
  async enroll() {
    this.enrollSvc.open();
    await this.enrollSvc.enroll(99);
  }
}
