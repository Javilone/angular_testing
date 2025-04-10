import { Injectable } from '@angular/core';
import { MemberEntity } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto hace que el servicio esté disponible en toda la aplicación, y no solo en el módulo donde se declara.
  // Esto es lo que hace que el servicio sea un singleton, ya que Angular solo crea una instancia de este servicio y la comparte entre todos los componentes que lo inyectan.
})
export class MembersService {
  constructor(private http: HttpClient) {}

  getAll(): Promise<MemberEntity[]> {
    return fetch('https://api.github.com/orgs/lemoncode/members').then(
      (response) => response.json()
    );
    // ¿¿?? return this.http.get<MemberEntity[]>('https://api.github.com/orgs/lemoncode/members')
  }
}
