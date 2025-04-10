import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { SearchComponent } from './utils/search/search.component';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // Se indica que este componente es independiente. Añadir esta en cada componente que se cree
  imports: [UserListComponent], // Aquí se importan los componentes necesarios
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';

  writeLog($event: String) {
    console.log('Click en Lupa detectado!!!');
    console.log($event);
  }
}
