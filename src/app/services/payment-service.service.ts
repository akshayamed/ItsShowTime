import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { PaymentDetails } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  // Method to process payment
  processPayment(paymentDetails: any): Observable<any> {
    // Assuming your backend API endpoint for processing payment is '/process-payment'
    return this.http.post<any>('/add-payment', paymentDetails);
  }

  // Method to confirm payment
  confirmPayment(paymentDetails: PaymentDetails): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>('/add-confirm-payment', paymentDetails, { headers });
  }
}
