import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { of, Subscription, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  pageTitle = 'movies';
  keys: string[] = [];

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  // subEvent!: Subscription;
  subKey!: Subscription;

  ngOnInit(): void {
    this.sub = of(2, 4, 6, 8).subscribe((i) =>
      console.log('Value from of: ', i)
    );
    this.sub = of([2, 4, 6, 8]).subscribe((i) =>
      console.log('Value from of: ', i)
    );

    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next(item) {
        console.log('From item: ', item);
      },
      complete() {
        console.log('From completed');
      },
      error(err) {
        console.log('From error: ', err);
      },
    });

    /* this.subEvent = fromEvent(document, 'click').subscribe({
      next: (event) => console.log('Click event', event.target),
      error: (err) => console.log('Click error', err),
      complete: () => console.log('Click completed'),
    }); */

    this.subKey = fromEvent(document, 'keydown').subscribe((event) => {
      const { key } = event as KeyboardEvent;
      this.keys.push(key);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subKey.unsubscribe();
  }
}
