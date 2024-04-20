import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private customerUrl = 'http://localhost:8000'; // Adjust URL as per backend endpoint

  constructor(private http: HttpClient) { }

  updateWallet(item: any, id: number): Observable<string> {
    const url = `${this.customerUrl}/${id}/wallet`;
    return this.http.put<string>(url, item, { responseType: 'json' }); // Change responseType to 'json'
  }
}
