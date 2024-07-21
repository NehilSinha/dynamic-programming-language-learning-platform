import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  API = 'http://127.0.0.1:5000' || 'http://localhost:4200'

  private baseUrl = this.API;

  constructor(private http: HttpClient) { }

  getInfo(type: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${type}`;
    return this.http.get<any>(apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      if (error.status === 0) {
        errorMessage = 'The API server is currently unreachable. Please try again later.';
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
