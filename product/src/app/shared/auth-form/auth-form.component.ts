import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user.model";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();

  @Input() currentUser: User;

  private username;
  private password;

  constructor() {
    this.clearFields();
  }

  login(event) {
    event.preventDefault();
    this.loginEvent.emit({username: this.username, password: this.password});
    this.clearFields();
  }

  logout() {
    this.logoutEvent.emit();
    this.clearFields();
  }

  private clearFields() {
    this.username = '';
    this.password = '';
  }

}
