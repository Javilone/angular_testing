import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Movie } from './movie';
import { MovieData } from './movie-data';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'api/movies';

  constructor(
    private http: HttpClient,
    private errorService: HttpErrorService,
    private reviewService: ReviewService
  ) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      tap(() => console.log('In http.get pipeline')),
      catchError((err) => this.handleError(err))
    );
  }

  getMovie(id: number): Observable<Movie> {
    const movieUrl = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(movieUrl).pipe(
      tap((t) => console.log('In http.get by id')),
      switchMap((m) => this.getMovieWithReviews(m)),
      tap((x) => x),
      catchError((err) => this.handleError(err))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }

  private getMovieWithReviews(movie: Movie): Observable<Movie> {
    if (movie.hasReviews) {
      const urlReviews = this.reviewService.getReviewUrl(movie.id);
      this.http.get<Review[]>(urlReviews).pipe(
        map((reviews) => {
          return {
            ...movie,
            reviews,
          };
        }),
        tap((t) => void 0)
      );
    }

    return of(movie);
  }
}
