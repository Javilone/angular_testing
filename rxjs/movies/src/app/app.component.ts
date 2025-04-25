import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { concatMap, delay, of, range, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pageTitle = 'movies';

  ngOnInit(): void {
    /*  
    range(1, 5)
      .pipe(
        concatMap((i) => of(i).pipe(delay(this.randomDelay()))),
        tap((x) => void 0)
      )
      .subscribe((item) => console.log('concatMap: '));
    */
  }

  private randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }
}
