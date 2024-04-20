import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {
  message: string = 'Payment successful. Thank you!';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // You can retrieve any additional data from the route if needed
    // Example: this.route.queryParams.subscribe(params => { });
  }
}
