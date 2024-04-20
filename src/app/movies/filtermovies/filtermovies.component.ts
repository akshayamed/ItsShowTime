import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-filtermovies',
  templateUrl: './filtermovies.component.html',
  styleUrls: ['./filtermovies.component.css']
})
export class FilterMoviesComponent implements OnInit {
  selectedLanguage: string = '';
  selectedGenre: string = '';
  languages: string[] = ['English', 'Telugu', 'Hindi', 'Marathi', 'Kannada', 'Punjabi', 'Tamil'];
  genres: string[] = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'];
  movies: Movie[] = [];
  showLanguageDropdown: boolean = false;
  showGenreDropdown: boolean = false;
  errorFetchingMovies: boolean = false;
  
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    // Fetch initial movies based on current selections
    this.fetchMovies();
  }

  fetchMovies(): void {
    if (this.selectedLanguage) {
      this.fetchMoviesByLanguage();
    } else if (this.selectedGenre) {
      this.fetchMoviesByGenre();
    } else {
      // Handle case where no language or genre is selected
      this.movies = [];
    }
  }

  onLanguageSelect(language: string): void {
    this.selectedLanguage = language;
    this.fetchMoviesByLanguage();
  }

  onGenreSelect(genre: string): void {
    this.selectedGenre = genre;
    this.fetchMoviesByGenre();
  }

  fetchMoviesByLanguage(): void {
    this.movieService.getMoviesByLanguage(this.selectedLanguage).subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error: any) => {
        console.error('Error fetching movies by language:', error);
      }
    );
  }

  fetchMoviesByGenre(): void {
    this.movieService.getMoviesByGenre(this.selectedGenre).subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error: any) => {
        console.error('Error fetching movies by genre:', error);
      }
    );
  }
  
  toggleLanguageDropdown(): void {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }
  
  toggleGenreDropdown(): void {
    this.showGenreDropdown = !this.showGenreDropdown;
  }

  onClearLanguages(): void {
    this.selectedLanguage = '';
    this.fetchMovies();
  }

  onClearGenres(): void {
    this.selectedGenre = '';
    this.fetchMovies();
  }
}
