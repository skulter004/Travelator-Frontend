import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './AppComponents/map/map.component';
import { MyBookingsComponent } from './AppComponents/my-bookings/my-bookings.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './AppComponents/calendar/calendar.component';
import { TravelRequestComponent } from './AppComponents/travel-request/travel-request.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
