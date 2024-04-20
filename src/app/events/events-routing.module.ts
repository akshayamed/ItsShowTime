import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEventsComponent } from './display-events/display-events.component';
import { SearchComponent } from './search/search.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FindcityeventsComponent } from './findcityevents/findcityevents.component';
import { FilterEventsComponent } from './filterevents/filterevents.component';


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
      },
      { path: 'eventcity',component: FindcityeventsComponent  },
      { path: 'eventfilter',component: FilterEventsComponent}
    ]
  }
];

<<<<<<< HEAD
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }



=======
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class EventsRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { FindcityeventsComponent } from './findcityevents/findcityevents.component';
// import { FilterEventsComponent } from './filterevents/filterevents.component';

// const routes: Routes = [{ path: 'eventcity',component: FindcityeventsComponent  },
// { path: 'eventfilter',component: FilterEventsComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class EventsRoutingModule { }
>>>>>>> b9a1209ebd16f030b3470133ef72e51e1dfbc40c
