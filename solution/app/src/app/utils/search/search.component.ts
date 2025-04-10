import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input() ph = 'placeholder'; //Input es un decorador de propiedades que permite recibir atributos(datos) desde un componente padre
  @Input() label = 'Buscar';

  name = 'Joe';
  updatedName = 'Ramon';

  @Output() clickEnLupa: EventEmitter<string> = new EventEmitter();
  //Output es un decorador de propiedades que permite emitir eventos desde un componente hijo hacia un componente padre.
  // EventEmitter es un objeto que permite emitir eventos personalizados.

  myFunction() {
    console.log(`valor del input: ${this.updatedName}`);
    this.name = this.updatedName;
  }

  nameUpdated($event: any) {
    this.updatedName = $event.target.value;
  }

  resetFunction() {
    this.name = '';
    this.updatedName = '';
  }

  clickEvent() {
    console.log('click en lupa');
    this.clickEnLupa.emit('evento custom desde search');
  }
}
