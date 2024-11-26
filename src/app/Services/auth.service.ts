import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7034/api/Account'; 
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
    localStorage.removeItem('token');  // Remove the token from localStorage
    this.setLoginStatus(false);  // Update the loggedIn status
  }
}
