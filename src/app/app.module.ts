import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { EnrollModalComponent } from './components/enroll-modal/enroll-modal.component';

@NgModule({
  declarations: [AppComponent], // Only non-standalone components go here
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    CurriculumComponent,
    HeroComponent,
    BenefitsComponent,
    InstructorComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ResourcesComponent,
    ProjectsComponent,
    FooterComponent,
    ChatbotComponent,
    EnrollModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
