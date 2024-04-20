import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  message: string = 'Booking confirmed. Thank you!';
  selectedSeats: string[] = [];
  selectedCoupons: string[] = [];
  selectedDate: string = '';
  timeSlot: string = '';
  totalAmount: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Retrieve data from route parameters
    this.route.queryParams.subscribe(params => {
      this.selectedSeats = params['selectedSeats'] ? params['selectedSeats'].split(',') : [];
      this.selectedCoupons = params['selectedMeals'] ? params['selectedMeals'].split(',') : []; // Corrected variable name
      this.selectedDate = params['bookingDate']; // Corrected variable name
      this.timeSlot = params['timeSlot'];
      this.totalAmount = +params['totalAmount'];
    });
  }
  

  
  confirmBooking() {
    // Perform any additional confirmation logic here, such as sending data to backend
    // After confirmation, navigate to the payment page
    console.log("Hi")
    this.router.navigate(['/app-wallet'], { 
      queryParams: {
        totalAmount: this.totalAmount // Pass totalAmount as query parameter
      }
    });
    console.log("Hi")
  }
}
