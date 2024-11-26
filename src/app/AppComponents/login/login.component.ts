import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
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
        this.router.navigate(["/profile"]);
        this.authService.setLoginStatus(true);
      },
      error => {    
        console.error('Login failed', error);
        this.toastr.error('Login Failed', 'Error')
        this.authService.setLoginStatus(false);
      }
    );
  }
}
