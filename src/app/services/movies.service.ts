import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movies } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  [x: string]: any;

  url:string="http://localhost:8000/movies"
  constructor(private http:HttpClient) { }

  private messageSubject = new BehaviorSubject<any>('');

  sendMessage(message: any){
    this.messageSubject.next(message);
  }

  getMessage(): Observable<any>{
    return this.messageSubject.asObservable();
  }

  displayMovies():Observable<Movies[]>
  {
    return this.http.get<Movies[]>(`${this.url}/displayMovies`)
  }

  searchByName(movieName: string):Observable<any>{
    return this.http.get(`${this.url}/searchMovies/${movieName}`,{responseType:'json'});
  }

  insertMovieDetails(movie:Movies):Observable<Movies>//post
  {
    return this.http.post<Movies>(`${this.url}/addMovie`,movie)
  }

  displayMovieById(id:number):Observable<Movies>
  {
    return this.http.get<Movies>(`${this.url}/displayMovieById/${id}`)
  }

  updateEventDetails(movie:Movies):Observable<Movies>
  {
    return this.http.put<Movies>(`${this.url}/updateMovie`,movie)
  }
  getMoviesByCity(city: string): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.url}findByCity/${city}`);
  }

  getMoviesByLanguage(language: string): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.url}findByLanguage?language=${language}`);
  }

  getMoviesByGenre(genre: string): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.url}findByGenre?genre=${genre}`);
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Movie } from '../model/movies';

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//   [x: string]: any;
//   private baseUrl = 'http://localhost:8000/movies/';

//   constructor(private http: HttpClient) { }

//   getMoviesByCity(city: string): Observable<Movies[]> {
//     return this.http.get<Movies[]>(`${this.baseUrl}findByCity/${city}`);
//   }

//   getMoviesByLanguage(language: string): Observable<Movies[]> {
//     return this.http.get<Movies[]>(`${this.baseUrl}findByLanguage?language=${language}`);
//   }

//   getMoviesByGenre(genre: string): Observable<Movies[]> {
//     return this.http.get<Movies[]>(`${this.baseUrl}findByGenre?genre=${genre}`);
//   }

  
// }


