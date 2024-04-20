import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingComponent } from './BookingApp/booking/booking.component';
import { ConfirmBookingComponent } from './BookingApp/confirm-booking/confirm-booking.component';
import { BookingService } from './services/booking-service.service';
import { AppRoutingModule } from './app-routing.module';

import { FeedbackModule } from './feedback/feedback.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieModule } from './movie/movie.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './BookingApp/payment/payment.component';
import { PaymentConfirmationComponent } from './BookingApp/payment-confirmation/payment-confirmation.component';
import { WalletComponent } from './BookingApp/wallet/wallet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './admin/admin.module';
import { EventModule } from './event/event.module';
import { HomepageModule } from './homepage/homepage.module';
import { EventsModule } from './events/events.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './admin/home/home.component';
import { FindcitymoviesComponent } from './movies/findcitymovies/findcitymovies.component';
import { FilterMoviesComponent } from './movies/filtermovies/filtermovies.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    UserLoginComponent,
    UserHomeComponent,
    BookingComponent,
    ConfirmBookingComponent,
    PaymentComponent,
    PaymentConfirmationComponent,
    WalletComponent,
    FindcitymoviesComponent,
    FilterMoviesComponent // Added component
       // Added component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FeedbackModule,
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MovieModule,
    AdminModule,
    EventModule,
    EventsModule,
    HomepageModule
  ],
  providers: [
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
