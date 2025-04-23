## Interpolation

```ts
@Component({...})
class MyComponent {}
```

```html
<p>{{ publicProperty }}</p>
```

## Bindings

- Attributte Binding '[ ]'
  - Primitives: strings, number, obj, date... NO functions
- Event Binding '( )'
  - Feed with 'callback': Class Component method.

```ts
class MyComponent {
  publicProperty = "Cualquier valor";

  myValue = "un valor...";

  inputEvent($event: any) {
    this.myValue = $event.target.value;
  }
}
```

```html
<p>{{ publicPropery }}</p>

<input [value]="myValue" (input)="inputEvent($event)" />
```

## Custom Events

- @Output
  - Para registrar el atributo de evento para poder pasar un callback
- EventEmitter
  - Permite lanzar el evento

## Directiva estructural

(Modifican el HTML)

- NgFor

```ts
class Component {
  fruits = ["banana", "apple", "melon"];
}
```

```html
<tr *ngFor="let fruit of fruits"></tr>
```

# Formularios

- Templeate - Motor de validaciones es HTML5
  - required, min, max, ...
- Reactive - Motor de validaciones provisto por Angular

  - Permite validaciones personalizadas
  - Soporte a validaciones asíncronas

- ngModel

  - Acumula validaciones a nivel de campo de formulario
  - Two way binding (es un bindng a atributo y binding a elemento)

- ngForm

  - Acumula validaciones a nivel de formulario completo

## Dependency Injection

```ts
class Employee {
  constructor(private salaryReport: SalaryReport) {}

  calcSalary() {
    this.salaryReport.method();
  }
}

// La clase Employee tiene una dependencia directa de SalaryReport porque
// necesita sus métodos.

class SalaryReport {
  getSalaryByHour(hours: number) {}

  getSalaryByRole(role: string) {}
}
```

## Routing

- Definimos diccionario de rutas para que el servicio Router las pueda usar.
- 'router-outlet' directiva donde el router intectará nuestros componentes.
- 'routerLink' permite hace navegación desde el template.
- 'routerLinkActive' 
