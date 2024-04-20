// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { PaymentRoutingModule } from './payment-routing.module';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     PaymentRoutingModule
//   ]
// })
// export class PaymentModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define routes related to payment processing
  // For example:
  // { path: 'payment', component: PaymentComponent },
  // { path: 'payment/success', component: PaymentSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
