import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AppComponents/Auth/login/login.component';
import { SignupComponent } from './AppComponents/Auth/signup/signup.component';
import { DashboardComponent } from './AppComponents/Home/dashboard/dashboard.component';
import { AddExpenseComponent } from './AppComponents/add-expense/add-expense.component';
import { ExpensesComponent } from './AppComponents/Home/expenses/expenses.component';
import { TripsComponent } from './AppComponents/Home/trips/trips.component';
import { BookCabComponent } from './AppComponents/book-cab/book-cab.component';
import { ProfileComponent } from './AppComponents/Home/profile/profile.component';
import { MyBookingsComponent } from './AppComponents/Home/my-bookings/my-bookings.component';
import { AuthGuard } from './Shared/Guard/auth.guard';
import { TravelRequestComponent } from './AppComponents/request-travel/travel-request.component';
import { RequestsComponent } from './AppComponents/Admin/requests/requests.component';
import { CabRequestsComponent } from './AppComponents/Admin/cab-requests/cab-requests.component';
import { TravelRequestsComponent } from './AppComponents/Admin/travel-requests/travel-requests.component';
import { AssignCabComponent } from './AppComponents/Admin/assign-cab/assign-cab.component';
import { VerifyEmailComponent } from './AppComponents/Auth/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {path: 'verify-email', component: VerifyEmailComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }, 
  { path: 'dashboard', component: DashboardComponent}, 
  { path: 'dashboard/addexpense', component: AddExpenseComponent}, 
  { path: 'dashboard/travelrequest', component: TravelRequestComponent}, 
  { path: 'expenses', component: ExpensesComponent},
  { path: 'trips', component: TripsComponent}, 
  { path: 'dashboard/bookcab', component: BookCabComponent},
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]}, 
  { path: 'mybookings', component: MyBookingsComponent} ,
  { path: 'requests', component: RequestsComponent,
    children: [
      { path: 'travel', component: TravelRequestsComponent},
      { path: 'cab', component: CabRequestsComponent, 
        children: [          
      { path: 'assign', component: AssignCabComponent},
        ]
      },
    ]
     , canActivate: [AuthGuard],
    data: {roles: ['Admin', 'Manager', 'Director']}},
  { path : 'cabRequests', component: CabRequestsComponent},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
