import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, HighlightDirective, FormsModule, NgIf, SearchByLoginPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;

  constructor(private membersService: MembersService) {} // Es aquí donde inyecta el memberService en services/members.service.ts
  // Lo va a instanciar una sola vez por aplicación (singleton)
  // El constructor se ejecuta una vez al inicio de la aplicación, y el ngOnInit cada vez que se carga el componente.
  // Por lo que el constructor es el lugar ideal para inyectar servicios que no cambian a lo largo de la vida del componente.
  // El ngOnInit es el lugar ideal para inicializar el componente, y cargar datos que pueden cambiar a lo largo de la vida del componente.

  ngOnInit(): void {
    this.membersService.getAll().then((members) => (this.members = members));
    this.newMember = this.newDefaultMember();
  }

  add(): void {
    this.members.push(this.newMember);
    this.newMember = this.newDefaultMember();
  }

  private newDefaultMember() {
    return {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  handleFileChange($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.newMember.avatar_url = reader.result as string;
    };
  }
}
