import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-enroll-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enroll-modal.component.html',
  styleUrls: ['./enroll-modal.component.css']
})
export class EnrollModalComponent implements OnInit, OnDestroy {
  open = false;
  private sub?: Subscription;

  constructor(private enrollSvc: EnrollService){}

  ngOnInit(){
    this.sub = this.enrollSvc.open$.subscribe(v => this.open = v);
  }
  ngOnDestroy(){ this.sub?.unsubscribe(); }
  close(){ this.enrollSvc.close(); }
}
