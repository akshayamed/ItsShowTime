import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmBookingComponent } from './confirm-booking.component';

@NgModule({
  declarations: [
    ConfirmBookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'confirm-booking', component: ConfirmBookingComponent }
    ])
  ],
  exports: [
    ConfirmBookingComponent
  ]
})
export class ConfirmBookingModule { }
