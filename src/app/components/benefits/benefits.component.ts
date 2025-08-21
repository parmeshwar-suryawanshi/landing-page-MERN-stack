import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
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
