import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { DOCUMENT } from '@angular/common'; // Import DOCUMENT

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideAnimations(),
    provideHttpClient(),
    { provide: DOCUMENT, useValue: document } // Provide DOCUMENT here
  ]
}).catch(err => console.error(err));
