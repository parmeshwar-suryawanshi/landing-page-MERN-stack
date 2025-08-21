import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaymentService } from './payment.service';

@Injectable({ providedIn: 'root' })
export class EnrollService {
  constructor(private paymentService: PaymentService) {}

  async enroll(amount: number = 99) {
    try {
      await this.paymentService.pay(amount);
    } catch (error) {
      console.error('Enrollment error:', error);
    }
  }

  private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();
  open(){ this._open$.next(true); }
  close(){ this._open$.next(false); }
}
