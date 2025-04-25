import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../movie';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './movie-detail.component.html',
  styles: ``,
})
export class MovieDetailComponent implements OnChanges, OnDestroy {
  // Just enough here for the template to compile
  @Input() movieId: number = 0;
  errorMessage = '';
  sub!: Subscription;

  // Movie to display
  movie: Movie | null = null;

  private movieService = inject(MovieService);

  // Set the page title
  pageTitle = this.movie
    ? `Product Detail for: ${this.movie.movieName}`
    : 'Movie Detail';

  addToCart(movie: Movie) {}

  ngOnChanges(changes: SimpleChanges): void {
    const id = changes['movieId'].currentValue;
    if (id > 0) {
      this.sub = this.movieService
        .getMovie(id)
        .pipe(
          catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
          })
        )
        .subscribe((movie) => (this.movie = movie));
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe;
    }

    this.sub.unsubscribe();
  }
}
