import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8000/add-booking'; // Adjust URL as per backend endpoint

  constructor(private http: HttpClient) { }

  calculateAmount(bookingData: any): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/calculate-amount`, bookingData);
  }
}


