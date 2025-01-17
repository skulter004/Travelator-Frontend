import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from 'src/app/AppComponents/Auth/login-popup/login-popup.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private toaster:ToastrService, private dialog: MatDialog){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    
    let clonedRequest = req;
    if (token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(clonedRequest).pipe(
      catchError(err => {
        if(err.status === 401){
          this.toaster.error('Login Required', 'Error');
          this.dialog.open(LoginPopupComponent, {
            width: '400px',
          });
        }
        return throwError(() => err);
      })
    );
  }
}
