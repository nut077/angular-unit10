import {Component, Inject} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    @Inject('APP_CONFIG') private appConfig,
    private userService: UserService
  ) { }

  login({username, password}): void {
    this.userService.login(username, password);
  }

  logout(): void {
    this.userService.logout();
  }

}
