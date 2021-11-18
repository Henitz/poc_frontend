
import { Component } from '@angular/core';
import { faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  faCodeBranch=faCodeBranch;
  faUsers=faUsers;

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
