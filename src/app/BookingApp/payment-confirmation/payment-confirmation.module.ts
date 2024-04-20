import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define routes related to payment confirmation
  // For example:
  // { path: 'payment-confirmation', component: PaymentConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentConfirmationRoutingModule { }
