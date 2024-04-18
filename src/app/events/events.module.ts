import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayEventsComponent } from './display-events/display-events.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FindcityeventsComponent } from './findcityevents/findcityevents.component';
import { FilterEventsComponent } from './filterevents/filterevents.component';
import { EventRoutingModule } from '../event/event-routing.module';

@NgModule({
  declarations: [
    DisplayEventsComponent,
    SearchComponent,
    AddEventsComponent,
    UpdateEventComponent,
    EventDetailsComponent,
    FindcityeventsComponent,
    FilterEventsComponent // Ensure these components are declared here
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DisplayEventsComponent,
    SearchComponent,
    AddEventsComponent,
    UpdateEventComponent,
    EventDetailsComponent,
    FindcityeventsComponent,
    FilterEventsComponent // Ensure these components are exported here
  ]
})
export class EventsModule { }
