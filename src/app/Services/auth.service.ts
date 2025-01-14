import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.baseUrl}/api/Account`; 
  private loggedIn = new BehaviorSubject<boolean>(false); 
  public loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.loggedIn.next(!!token);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);  
          this.router.navigate(['profile']);
          this.setLoginStatus(true); 
        }
      })
    );
  }

  setLoginStatus(isLogged: boolean): void {
    this.loggedIn.next(isLogged);
  }

  getLoginStatus(): boolean {
    return this.loggedIn.value;
  }

  logout(): void {
    localStorage.removeItem('token'); 
    this.setLoginStatus(false);  
  }

  getUserRoles(): string[] {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const payload = JSON.parse(atob(token.split('.')[1])); 
      return payload.roles || [];      
    }
    return [];
  }
}
