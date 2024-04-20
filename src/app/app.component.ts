import { Component } from '@angular/core';
import {faChair } from '@fortawesome/free-solid-svg-icons';
import { faUtensils, faGlassCheers, faIceCream } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'BookingApp';
  faChair = faChair ;
  faUtensils=faUtensils;
  //faPopcorn=faPopcorn;
  faGlassCheers=faGlassCheers;
  faIceCream=faIceCream;
}
