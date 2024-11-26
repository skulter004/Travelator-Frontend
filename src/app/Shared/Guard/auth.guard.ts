import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.getLoginStatus();
    const userRoles = this.authService.getUserRoles();    
    const reqRoles = route.data['roles'] as string[];

    if(reqRoles != undefined){      
    const hasAccess = reqRoles.some((role) => userRoles.includes(role));
    if(!hasAccess){
      return false;
    }
    else{
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }    
      return true;
    }
    }
    else{
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }    
      return true;
    }
  }
}