import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseURL = "http://localhost:3000";
  private http = inject(HttpClient);

  getMoviesList(): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}`);
  }
}
