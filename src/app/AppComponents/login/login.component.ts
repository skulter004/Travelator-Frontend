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
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(["/profile"]);
          this.authService.setLoginStatus(true);
        },
        error => {              
          this.toastr.error(error.error.title, 'Error');
          this.authService.setLoginStatus(false);
        }
      );
    }else{
      Object.keys(this.loginForm.controls).forEach(controlName => {
      const controlErrors = this.loginForm.get(controlName)?.errors;
      if (controlErrors) {
        this.toastr.error(`Check ${controlName}`, `${controlName}`);
      }
    });
    }
  }
}
