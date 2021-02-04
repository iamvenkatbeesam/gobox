import { Component } from '@angular/core';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gobox';

    currentUser: User;
    isLogin: boolean;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.isLogin = false;
    }   

    isLoggedIn$: Observable<boolean>;   
  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }               

 // ngOnInit() {
 //   this.currentUser = this.authenticationService.currentUserValue; 
 // }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
