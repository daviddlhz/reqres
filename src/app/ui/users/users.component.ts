import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IResponseUsers, IUser } from '@domain/user/user.dto';
import { IUserRepository } from '@domain/user/user.repository';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData!: IUser[];

  constructor(@Inject('userRepository') private userServices: IUserRepository) { }

  ngOnInit(): void {
    this.fecthAllUsers();
  }

  fecthAllUsers(): void {
    this.userServices.getUsers().subscribe((response: HttpResponse<IResponseUsers>) => {
      if(response.status == HttpStatusCode.Ok) {
        this.usersData = response.body?.data || []
      }
    });
  }

}
