import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  Login() {
    
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {        
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(["/dashboard"]);
        this.authService.setLoginStatus(true);
      },
      error => {    
        console.error('Login failed', error);
        this.authService.setLoginStatus(false);
      }
    );
  }
}
