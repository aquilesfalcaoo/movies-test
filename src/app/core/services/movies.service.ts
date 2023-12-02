import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getMoviesList(): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}`);
  }
}
