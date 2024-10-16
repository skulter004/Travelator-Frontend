import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AppComponents/login/login.component';
import { SignupComponent } from './AppComponents/signup/signup.component';
import { DashboardComponent } from './AppComponents/dashboard/dashboard.component';
import { AddExpenseComponent } from './AppComponents/add-expense/add-expense.component';
import { ExpensesComponent } from './AppComponents/expenses/expenses.component';
import { TripsComponent } from './AppComponents/trips/trips.component';
import { BookCabComponent } from './AppComponents/book-cab/book-cab.component';
import { ProfileComponent } from './AppComponents/profile/profile.component';
import { MyBookingsComponent } from './AppComponents/my-bookings/my-bookings.component';
import { AuthGuard } from './Services/auth.guard';
import { TravelRequestComponent } from './AppComponents/travel-request/travel-request.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }, 
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'dashboard/addexpense', component: AddExpenseComponent, canActivate: [AuthGuard] }, 
  { path: 'dashboard/travelrequest', component: TravelRequestComponent, canActivate: [AuthGuard] }, 
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
  { path: 'trips', component: TripsComponent , canActivate: [AuthGuard]}, 
  { path: 'dashboard/bookcab', component: BookCabComponent , canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]}, 
  { path: 'mybookings', component: MyBookingsComponent , canActivate: [AuthGuard]} ,
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
