import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dA } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'https://localhost:7034/api/Trips'; 
  constructor(private http: HttpClient) { }

  requestTravel(data: any){
    return this.http.post(`${this.apiUrl}/requestTravel`, data);
  }

  addExpense(expense: any){
    return this.http.post(`${this.apiUrl}/addExpense`, expense);
  }
}
