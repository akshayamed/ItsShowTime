import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-findcitymovies',
  templateUrl: './findcitymovies.component.html',
  styleUrls: ['./findcitymovies.component.css']
})
export class FindcitymoviesComponent {
  cities: { name: string, imageUrl: string }[] = [
    { name: 'Mumbai', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png' },
    { name: 'Hyderabad', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png' },
    { name: 'Pune', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/pune.png' },
    { name: 'Delhi - NCR', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png' },
    { name: 'Bengaluru', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/bang.png' },
    { name: 'Ahmedabad', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png' },
    { name: 'Kolkata', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png' },
    { name: 'Chennai', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/chen.png' },
    { name: 'Kochi', imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/koch.png' }
  ];

  additionalCities: string[] = [
    'Jaipur', 'LuckNow', 'Maisur', 'Goa',
    'Udaipur', 'Pondicherry', 'Ooty', 'Rishikesh',
    'Mahabaleshwar', 'Hampi', 'Madurai', 'Allahabad',
    'Gangtok', 'Vikarabad', 'Zaherabad', 'Vijayawada'
  ];

  showAdditionalCities: boolean = false;
  movies: any[] = [];
  selectedCity: string = '';
  citySelected: boolean = false;
  errorFetchingMovies:boolean = false;
 
  constructor(private movieService: MoviesService) { }

  toggleCitySelection(): void {
    this.citySelected = !this.citySelected;
  }

  selectCity(city: string): void {
    this.selectedCity = city;
    this.getMoviesByCity(city);
    this.citySelected = false; // Close the popup box after selecting city
    this.showAdditionalCities = false; // Close other cities
  }

  selectAdditionalCity(city: string): void {
    this.selectedCity = city;
    this.getMoviesByCity(city);
    this.citySelected = false; // Close the popup box after selecting city
  }

  toggleAdditionalCities(): void {
    this.showAdditionalCities = !this.showAdditionalCities;
  }
  getMoviesByCity(city: string): void {
    this.movieService.getMoviesByCity(city)
      .subscribe(
        data => {
          this.movies = data;
          this.errorFetchingMovies = false; // Reset error flag on successful fetch
        },
        error => {
          /* error occurs when there is no city in it */
          console.log('Error fetching movies:', error);
          this.movies = []; // Clear movies array when an error occurs
          this.errorFetchingMovies = true; // Set error flag
        }
      );
  }
  

  get additionalCitiesGrouped(): string[][] {
    const chunkSize = 4;
    const groups = [];
    for (let i = 0; i < this.additionalCities.length; i += chunkSize) {
      groups.push(this.additionalCities.slice(i, i + chunkSize));
    }
    return groups;
  }
}
