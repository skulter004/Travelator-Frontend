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
import { AuthGuard } from './Shared/Guard/auth.guard';
import { TravelRequestComponent } from './AppComponents/request-travel/travel-request.component';
import { RequestsComponent } from './AppComponents/requests/requests.component';
import { CabRequestsComponent } from './AppComponents/cab-requests/cab-requests.component';
import { TravelRequestsComponent } from './AppComponents/travel-requests/travel-requests.component';
import { AssignCabComponent } from './AppComponents/assign-cab/assign-cab.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }, 
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  }, 
  { path: 'dashboard/addexpense', component: AddExpenseComponent, canActivate: [AuthGuard] }, 
  { path: 'dashboard/travelrequest', component: TravelRequestComponent, canActivate: [AuthGuard] }, 
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
  { path: 'trips', component: TripsComponent , canActivate: [AuthGuard]}, 
  { path: 'dashboard/bookcab', component: BookCabComponent , canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]}, 
  { path: 'mybookings', component: MyBookingsComponent , canActivate: [AuthGuard]} ,
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
  { path : 'cabRequests', component: CabRequestsComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
