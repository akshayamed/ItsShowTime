import { Component } from '@angular/core';
import { Events } from '../../model/events';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'display-events',
  templateUrl: './display-events.component.html',
  styleUrl: './display-events.component.css'
})
export class DisplayEventsComponent {

  events:Events[] |undefined
  subscription: Subscription;
  message: any;
  reload: boolean | undefined;
 
  
  constructor(private service :EventsService,private router: Router){
    this.subscription = this.service.getMessage().subscribe((message) => {
      this.message = message;
      this.reload = true;
      this.events = this.message;
      console.log(this.events);
    });
  }
  ngOnInit(){
    
    
    this.service.displayEvents().subscribe({
      next:(response)=>{
        console.log("back to front end:next");
        console.log(response);
        this.events=response;
        
      },
      error:(error)=>{
        console.log("Back to front end:error");
        console.log((error));
      },
      complete:()=>{
        console.log("Back to frontend : compelete :Done");
        
      }
    })
  }
  showEventDetails(event: any): void {
    this.router.navigate(['/events/event-details', event.eventId]);
  }
  
}
