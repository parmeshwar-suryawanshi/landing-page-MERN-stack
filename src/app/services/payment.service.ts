import { Injectable } from '@angular/core';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private isRazorpayLoaded(): boolean {
    return typeof Razorpay !== 'undefined' && typeof Razorpay === 'function';
  }

  private loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (this.isRazorpayLoaded()) {
        resolve();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('Razorpay script loaded dynamically');
        resolve();
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
        reject(new Error('Failed to load Razorpay script'));
      };
      document.head.appendChild(script);
    });
  }

  async pay(amount: number) {
    try {
      // Try to load Razorpay if not already loaded
      if (!this.isRazorpayLoaded()) {
        await this.loadRazorpayScript();
      }

      // Check again after loading
      if (!this.isRazorpayLoaded()) {
        throw new Error('Razorpay failed to load');
      }

      const options = {
        key: 'rzp_test_R7cHnAatXxrRQD', // Replace with your Razorpay Test Key ID
        amount: amount * 100,  // amount in paise
        currency: 'INR',
        name: 'MERN Mastery',
        description: 'Course Enrollment Payment',
        image: 'https://cdn.iconscout.com/icon/free/png-256/free-mern-3521662-2945110.png',
        order_id: '', // Optional: generate from backend for real projects
        handler: function (response: any) {
          alert('Payment Successful ✅\nPayment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999'
        },
        notes: {
          course: 'MERN Stack Mastery'
        },
        theme: {
          color: '#2563eb'
        },
        method: {
            netbanking: true,
            card: true,
            upi: true,
            wallet: true,
            qr: true
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Payment gateway not available. Please try again later or contact support.');
    }
  }
}
