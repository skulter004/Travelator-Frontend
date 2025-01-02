import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './AppComponents/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './AppComponents/dashboard/dashboard.component';
import { ExpensesComponent } from './AppComponents/expenses/expenses.component';
import { SignupComponent } from './AppComponents/signup/signup.component';
import { LoginComponent } from './AppComponents/login/login.component';
import { AddExpenseComponent } from './AppComponents/add-expense/add-expense.component';
import { TripsComponent } from './AppComponents/trips/trips.component';
import { TripCardComponent } from './AppComponents/trip-card/trip-card.component';
import { BookCabComponent } from './AppComponents/book-cab/book-cab.component';
import { ProfileComponent } from './AppComponents/profile/profile.component';
import { MapComponent } from './AppComponents/map/map.component';
import { MyBookingsComponent } from './AppComponents/my-bookings/my-bookings.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './AppComponents/calendar/calendar.component';
import { TravelRequestComponent } from './AppComponents/request-travel/travel-request.component';
import { RequestsComponent } from './AppComponents/requests/requests.component';
import { AuthInterceptor } from './Shared/Interceptor/Auth-interceptor';
import { CabRequestsComponent } from './AppComponents/cab-requests/cab-requests.component';
import { TravelRequestsComponent } from './AppComponents/travel-requests/travel-requests.component';
import { AssignCabComponent } from './AppComponents/assign-cab/assign-cab.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './Services/notification.service';
import { EmptyComponent } from './AppComponents/empty/empty.component';
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
    MapComponent,
    MyBookingsComponent,
    CalendarComponent,
    TravelRequestComponent,
    RequestsComponent,
    CabRequestsComponent,
    TravelRequestsComponent,
    AssignCabComponent,
    EmptyComponent,
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
