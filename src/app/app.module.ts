import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './AppComponents/Shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './AppComponents/Home/dashboard/dashboard.component';
import { ExpensesComponent } from './AppComponents/Home/expenses/expenses.component';
import { SignupComponent } from './AppComponents/Auth/signup/signup.component';
import { LoginComponent } from './AppComponents/Auth/login/login.component';
import { AddExpenseComponent } from './AppComponents/add-expense/add-expense.component';
import { TripsComponent } from './AppComponents/Home/trips/trips.component';
import { TripCardComponent } from './AppComponents/trip-card/trip-card.component';
import { BookCabComponent } from './AppComponents/book-cab/book-cab.component';
import { ProfileComponent } from './AppComponents/Home/profile/profile.component';
import { MyBookingsComponent } from './AppComponents/Home/my-bookings/my-bookings.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './AppComponents/Shared/calendar/calendar.component';
import { TravelRequestComponent } from './AppComponents/request-travel/travel-request.component';
import { RequestsComponent } from './AppComponents/Admin/requests/requests.component';
import { AuthInterceptor } from './Shared/Interceptor/Auth-interceptor';
import { CabRequestsComponent } from './AppComponents/Admin/cab-requests/cab-requests.component';
import { TravelRequestsComponent } from './AppComponents/Admin/travel-requests/travel-requests.component';
import { AssignCabComponent } from './AppComponents/Admin/assign-cab/assign-cab.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './Services/notification.service';
import { EmptyComponent } from './AppComponents/Shared/empty/empty.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginPopupComponent } from './AppComponents/Auth/login-popup/login-popup.component';
import { VerifyEmailComponent } from './AppComponents/Auth/verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ExpensesComponent,
    AddExpenseComponent,
    TripsComponent,
    TripCardComponent,
    BookCabComponent,
    ProfileComponent,
    MyBookingsComponent,
    CalendarComponent,
    TravelRequestComponent,
    RequestsComponent,
    CabRequestsComponent,
    TravelRequestsComponent,
    AssignCabComponent,
    EmptyComponent,
    LoginPopupComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule, 
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right', 
      preventDuplicates: true, 
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
  }, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
