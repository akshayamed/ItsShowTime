
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faChair, faGlassCheers, faIceCream, faUtensils } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  seats = ['A1', 'A2', 'A3','A4','A5','A6','A7','A8','A9', 'B1', 'B2', 'B3','B4','B5','B6','B7','B8','B9','C1','C2','C3','C4','C5','C6','C7','C8','C9']; // Example seats
  faChair = faChair;
  
  meals = ['Food', 'Popcorn', 'Soft Drinks', 'Ice Cream']; // Example meals
  faUtensils = faUtensils;
  
  faGlassCheers = faGlassCheers;
  faIceCream = faIceCream;


  
  getMealIcon(meal: string): IconDefinition {
    switch (meal) {
      case 'Food':
        return this.faUtensils;
      case 'Soft Drinks':
        return this.faGlassCheers;
      case 'Ice Cream':
        return this.faIceCream;
      default:
        return this.faUtensils; // Return a default icon or the same icon for all meals
    }
  }
  
  

  
  timeSlots = ['9:30 AM - 12:30 PM', '1:00 PM - 4:00 PM','6:00 PM - 9:00 PM']; // Example time slots
  minDate: string = new Date().toISOString().split('T')[0];
  selectedSeats = this.seats.map(seat => ({seat, checked: false}));
  selectedMeals = this.meals.map(meal => ({meal, checked: false}));
  bookingDate: string = '';
  timeSlot: string = '';
  totalAmount: number = 0;


  constructor(private router: Router) {}

  onCheckboxChange() {
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    const selectedSeatValues = this.selectedSeats.filter(s => s.checked).length;
    const selectedMealValues = this.selectedMeals.filter(m => m.checked).length;
    this.totalAmount = this.calculateTotalAmount(selectedSeatValues, selectedMealValues);
  }
 
  isSelectedSeat(seat: string): boolean {
    return this.selectedSeats.some(s => s.seat === seat && s.checked);
  }

  toggleSeatSelection(seat: string) {
    const index = this.selectedSeats.findIndex(s => s.seat === seat);
    if (index > -1) {
      this.selectedSeats[index].checked = !this.selectedSeats[index].checked;
      this.updateTotalAmount();
    }
  }
  isSelectedMeal(meal: string): boolean {
    return this.selectedMeals.some(m => m.meal === meal && m.checked);
  }
  
  toggleMealSelection(meal: string) {
    const index = this.selectedMeals.findIndex(m => m.meal === meal);
    if (index > -1) {
      this.selectedMeals[index].checked = !this.selectedMeals[index].checked;
      this.updateTotalAmount();
    }
  }
  



  submitBookingForm() {
    const selectedSeatValues = this.selectedSeats.filter(s => s.checked).map(s => s.seat);
    const selectedMealValues = this.selectedMeals.filter(m => m.checked).map(m => m.meal);
    this.totalAmount = this.calculateTotalAmount(selectedSeatValues.length, selectedMealValues.length);
    if(this.bookingDate.length!=0&&this.timeSlot.length!=0&&this.seats.length!=0&&this.meals.length!=0){
      const formDataSnapshot = {
        selectedSeats: this.selectedSeats,
        selectedCoupons: this.selectedMeals,
        selectedDate: this.bookingDate,
        timeSlot: this.timeSlot,
        totalAmount: this.totalAmount
      };
      console.log(formDataSnapshot);
      this.router.navigate(['/add-confirm-booking'], {
        queryParams: {
          selectedSeats: selectedSeatValues.join(','),
          selectedMeals: selectedMealValues.join(','),
          bookingDate: this.bookingDate,
          timeSlot: this.timeSlot,
          totalAmount: this.totalAmount
        }
      });
    }else{
      alert("fields must be requried");
    }
    
  }
  calculateTotalAmount(numSeats: number, numMeals: number): number {
    // Implement your logic to calculate total amount here
    return numSeats * 100 + numMeals * 20; // Example logic
}

}


