import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {

  private currentUser: User = null;
  private currentUserStream = new BehaviorSubject<User>(this.currentUser);

  constructor() { }

  login(username: string, password: string): User {
    const isAdmin = username === 'freedom' && password === "pass";
    this.currentUser = new User(username, isAdmin);
    this.broadcast();
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    this.broadcast();
  }

  getCurrentUser(): BehaviorSubject<User> {
    return this.currentUserStream;
  }

  private broadcast() {
    this.currentUserStream.next(this.currentUser);
  }

}
