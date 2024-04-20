// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// interface PaymentResponse {
//   status: string;
//   message: string;
// }

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   totalAmount: number | undefined;
//   cardNumber: string = '';
//   expiryDate: string = '';
//   cvv: string = '';

//   constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.totalAmount = +params['totalAmount']; // Convert to number
//     });
//   }

//   confirmPayment() {
//     const paymentDetails = {
//       card_number: this.cardNumber,
//       expiry_date: this.expiryDate,
//       cvv: this.cvv
//     };
  
//     this.http.post('/add-confirm-payment', paymentDetails).subscribe(
//       (response) => {
//         // Check if the response is in JSON format
//         if (typeof response === 'object' && response.hasOwnProperty('status')) {
//           // Check if the payment was successful
//           if (response.status === 'success') {
//             console.log(response.message);
//             // Redirect to payment confirmation page
//             this.router.navigate(['/payment-confirmation']);
//           } else {
//             console.error('Payment failed:', response.message);
//             // Handle payment failure
//           }
//         } else {
//           console.error('Invalid response format:', response);
//           // Handle unexpected response format
//         }
//       },
//       (error) => {
//         console.error('Error processing payment:', error);
//         // Handle error response from backend
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../../services/payment-service.service';
import { PaymentDetails } from '../../model/payment';

interface PaymentResponse {
  status: string;
  message: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalAmount: number | undefined;

  paymentDetails:PaymentDetails = {
    card_number: "1234567890123456",
    expiry_date: "2024-12-31",
    cvv: "123"
  
  };
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private service:PaymentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.totalAmount = +params['totalAmount']; // Convert to number
    });
  }


  confirmPayment() {
    console.log(this.paymentDetails)
    this.service.confirmPayment(this.paymentDetails).subscribe((data)=>{
      alert(data);
    })
}
}