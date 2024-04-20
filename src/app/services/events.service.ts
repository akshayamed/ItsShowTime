import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Events } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  [x: string]: any;

  url:string="http://localhost:8000/events"
  constructor(private http:HttpClient) { }


  private messageSubject = new BehaviorSubject<any>('');

  sendMessage(message: any) {
    this.messageSubject.next(message);
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  displayEvents():Observable<Events[]>
  {
    return this.http.get<Events[]>(`${this.url}/displayEvents`)
  }
 
  searchByName(eventName: string): Observable<any> {
    return this.http.get(`${this.url}/searchEvents/${eventName}`, { responseType: 'json' });
  }

  insertEventDetails(event:Events):Observable<Events>//post
  {
    return this.http.post<Events>(`${this.url}/addEvent`,event)
  }

  displayEventById(id:number):Observable<Events>
  {
    return this.http.get<Events>(`${this.url}/displayEventById/${id}`)
  }
  
  updateEventDetails(event:Events):Observable<Events>
  {
    return this.http.put<Events>(`${this.url}/updateEvent`,event)
  }
  getEventsByGenre(genre: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}findByGenre?genre=${genre}`);
  }

  getEventsByCity(city: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}findByCity/${city}`);
  }
  getEventsByPriceRange(price: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}price-range/${price}`);
  }

  // deleteMovieByName(movieName: string): Observable<any> {
  //   return this.http.delete(`${this.url}/deleteMovieByName/${movieName}`, { responseType: 'text' as 'json' });
  // }

}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Event } from '../model/events';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {
//   [x: string]: any;
//   private baseUrl = 'http://localhost:8000/events/';

//   constructor(private http: HttpClient) { }

//   getEventsByGenre(genre: string): Observable<Event[]> {
//     return this.http.get<Events[]>(`${this.baseUrl}findByGenre?genre=${genre}`);
//   }

//   getEventsByCity(city: string): Observable<Event[]> {
//     return this.http.get<Events[]>(`${this.baseUrl}findByCity/${city}`);
//   }
//   getEventsByPriceRange(price: string): Observable<Event[]> {
//     return this.http.get<Events[]>(`${this.baseUrl}price-range/${price}`);
//   }
  
// }
