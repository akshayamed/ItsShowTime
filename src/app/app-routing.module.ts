import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import path from 'path';
import { MainComponent } from './homepage/main/main.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';


import { ConfirmBookingComponent } from './BookingApp/confirm-booking/confirm-booking.component';
import { BookingComponent } from './BookingApp/booking/booking.component';
import { PaymentComponent } from './BookingApp/payment/payment.component';
import { PaymentConfirmationComponent } from './BookingApp/payment-confirmation/payment-confirmation.component';
import { WalletComponent } from './BookingApp/wallet/wallet.component';



const routes: Routes = [
   {    path:'',    component:MainComponent  },
  // {path:'',component:UserLoginComponent},
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-admin-login', component: AdminLoginComponent },
  { path: 'app-admin-home', component: AdminHomeComponent } ,
  { path: 'app-user-login', component: UserLoginComponent },
  { path: 'app-user-home', component: UserHomeComponent},


  { path: 'app-booking', component: BookingComponent },
  { path: 'add-confirm-booking', component: ConfirmBookingComponent },
  { path: 'app-payment', component: PaymentComponent },
  { path: 'payment-confirmation', component: PaymentConfirmationComponent },
  { path: '', redirectTo: '/app-booking', pathMatch: 'full' }, // Default route
  { path: 'add-payment', component: PaymentComponent },
  { path: 'add-confirm-payment', component: PaymentConfirmationComponent }, 
  { path: 'app-wallet', component: WalletComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// app-routing.module.ts

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
