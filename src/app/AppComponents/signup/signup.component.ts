import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  signUpForm!: FormGroup;
  
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  
  Signup() {
    this.authService.register(this.signUpForm.value).subscribe(
      response => {
        console.log('User registered', response);
        this.router.navigate(['auth/login']);
        this.authService.setLoginStatus(true);
        localStorage.setItem('token', response.token);        
      },
      error => {
        console.error('Registration failed', error);
        this.toastr.error(error.error[0].description, 'Error');
        this.authService.setLoginStatus(false);
      }
    );
  }
}
