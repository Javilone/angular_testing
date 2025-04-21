import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    HighlightDirective,
    FormsModule,
    NgIf,
    SearchByLoginPipe,
    UserEditComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;

  memberSelected!: MemberEntity;

  constructor(private membersService: MembersService) {}

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

  select(member: MemberEntity): void {
    this.memberSelected = { ...member };
  }

  updatedMember($event: MemberEntity): void {
    this.members = this.members.map((member) => {
      if (member.id === $event.id) {
        return $event;
      }
      return member;
    });
  }
}
