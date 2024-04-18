import { Component, OnInit } from '@angular/core';
import { Events } from '../../model/events';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-filterevents',
  templateUrl: './filterevents.component.html',
  styleUrls: ['./filterevents.component.css']
})
export class FilterEventsComponent implements OnInit {
  selectedGenre: string = '';
  selectedPriceRange: string = ''; // New property for selected price range
  genres: string[] = ['Comedy', 'Workshops', 'Music', 'Kids'];
  priceRanges: string[] = ['0-300', '300-500', '500-900', '900-above']; // Price ranges
  events: Events[] = [];
  showGenreDropdown: boolean = false;
  showPriceRangeDropdown: boolean = false; // New property to toggle price range dropdown

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    // Fetch initial events based on current selections
    this.fetchEvents();
  }

  fetchEvents(): void {
    if (this.selectedGenre) {
      this.fetchEventsByGenre();
    } else if (this.selectedPriceRange) {
      this.fetchEventsByPriceRange();
    } else {
      // Handle case where no genre or price range is selected
      this.events = [];
    }
  }

  onGenreSelect(genre: string): void {
    this.selectedGenre = genre;
    this.selectedPriceRange = ''; // Reset price range selection
    this.fetchEventsByGenre();
  }

  onPriceRangeSelect(priceRange: string): void {
    this.selectedPriceRange = priceRange;
    this.selectedGenre = ''; // Reset genre selection
    this.fetchEventsByPriceRange();
  }

  fetchEventsByGenre(): void {
    this.eventService.getEventsByGenre(this.selectedGenre).subscribe(
      (data: Events[]) => {
        this.events = data;
      },
      (error: any) => {
        console.error('Error fetching events by genre:', error);
      }
    );
  }

  fetchEventsByPriceRange(): void {
    this.eventService.getEventsByPriceRange(this.selectedPriceRange).subscribe(
      (data: Events[]) => {
        this.events = data;
      },
      (error: any) => {
        console.error('Error fetching events by price range:', error);
      }
    );
  }

  toggleGenreDropdown(): void {
    this.showGenreDropdown = !this.showGenreDropdown;
  }

  togglePriceRangeDropdown(): void { // Method to toggle price range dropdown
    this.showPriceRangeDropdown = !this.showPriceRangeDropdown;
  }

  onClearGenres(): void {
    this.selectedGenre = '';
    this.fetchEvents();
  }

  onClearPriceRange(): void {
    this.selectedPriceRange = '';
    this.fetchEvents();
  }
}
