import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.moviesUrl)
      .pipe(tap((t) => console.log('In http.get pipeline')));
  }
}
