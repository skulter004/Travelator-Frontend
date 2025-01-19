import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.loggedIn.next(!token);
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

  verifyEmail(): Promise<{ isVerified: boolean, isAlreadyVerified: boolean }> {
    return new Promise((resolve, reject) => {
      this.route.queryParams.subscribe((params: any) => {
        const userId = params['userId'];
        const token = params['token'];
        const name = params['name'];
        
        console.log('Name:', name);
        console.log('UserId:', userId);
        console.log('Token:', token);
        
        this.http
          .get(`${this.apiUrl}/confirm-email?userId=${userId}&name=${name}&token=${encodeURIComponent(token)}`)
          .subscribe(
            (res: any) => {
              console.log('API Success:', res);
              resolve({isVerified:true, isAlreadyVerified:false});
            },
            (err) => {
              console.log('API Error:', err);
              if(err.error == "Email already verified."){
                resolve({isVerified:false, isAlreadyVerified:true}); 
              }
              resolve({isVerified:false, isAlreadyVerified:false}); 
            }
          );
      });
    });
  }
  
}
