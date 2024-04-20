import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  url:string= "http://localhost:8000/movies"
  //HttpClient --to execute get/post/put/delete API/request
  constructor(private http:HttpClient)
  {

  }
  //observable:Async--Observable<object>
  insertMovieDetails(movie:Movie):Observable<Movie>//post
  {
    return this.http.post<Movie>(`${this.url}/addMovie`,movie)
  }

  getmovieById(id:number):Observable<Movie>
  {
    return this.http.get<Movie>(`${this.url}/displayMovieById/${id}`)
  }


   getMovieDetails():Observable<Movie[]>
   {
    console.log("In service Get Method for Movies")
     return this.http.get<Movie[]>(`${this.url}/displayMovies`)
   }

   deleteMovieByName(movieName: string): Observable<any> {
    return this.http.delete(`${this.url}/deleteMovieByName/${movieName}`, { responseType: 'text' as 'json' });
  }


  updateMovieDetails(movie:Movie):Observable<Movie>
  {
    return this.http.put<Movie>(`${this.url}/updateMovie`,movie)
  }

  deleteMovie(movieName: string): Observable<any> {
    return this.http.delete(`${this.url}/deleteMovieByName/${movieName}`, { responseType: 'text' as 'json' });
  }


 

}
