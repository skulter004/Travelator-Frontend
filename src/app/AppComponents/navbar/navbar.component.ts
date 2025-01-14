import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthRouteActive: boolean = false;
  isLogged = false;
  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthRouteActive = this.router.url.startsWith('/auth');
      }
    });
    this.authService.loggedIn$.subscribe(status => {
      this.isLogged = status;
    });
  }
}
