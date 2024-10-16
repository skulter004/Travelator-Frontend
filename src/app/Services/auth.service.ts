import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7034/api/Account';
  private loggedIn = new BehaviorSubject<boolean>(false); 
  public loggedIn$ = this.loggedIn.asObservable(); 

  constructor(public http: HttpClient) {
    const token = localStorage.getItem('token');
    this.loggedIn.next(!!token);
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setLoginStatus(isLogged: boolean): void {
    this.loggedIn.next(isLogged);
  }

  getLoginStatus(): boolean {
    return this.loggedIn.value;
  }

  // Simulate logout method
  logout() {
    localStorage.removeItem('token');
    this.setLoginStatus(false);
  }
}
