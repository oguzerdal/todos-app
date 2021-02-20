import { Injectable, OnInit } from '@angular/core'
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable()
export class UserRepository implements OnInit {
    private users: User[] = [];

    constructor(private userService: UserService) {
        this.userService
            .getUsers()
            .subscribe(users => this.users = users);
    }
    ngOnInit() {

    }
    getUsers(): User[] {
        return this.users;
    }
    

}