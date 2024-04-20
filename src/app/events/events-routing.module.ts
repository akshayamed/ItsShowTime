import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { SearchComponent } from './search/search.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';


const routes: Routes = [
  {
    path:"events",
    children:[
      {
        path:"showEvents",
        component:DisplayEventsComponent
      },
      {
        path:"searchEvent/:eventName",
        component:SearchComponent
      },
      {
        path:"insertEvent",
        component:AddEventsComponent
      },
      {
        path:"updateEvent/:id",
        component:UpdateEventComponent
      },
      {
        path:"event-details/:id",
        component : EventDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }



