import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/data'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // GET request
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // POST request
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // PUT request
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE request
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  logMessage(message: string): void {
    console.log(`LoggingService: ${message}`);
  }

  logError(error: string): void {
    console.error(`LoggingService Error: ${error}`);
  }
}
