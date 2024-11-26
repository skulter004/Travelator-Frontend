import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private apiUrl = 'https://localhost:7034/api/Trips'; 
  constructor(private http: HttpClient) { 
    const token = localStorage.getItem('token');
  }

  requestTravel(data: any){
    return this.http.post(`${this.apiUrl}/requestTravel`, data);
  }

  addExpense(expense: any){
    return this.http.post(`${this.apiUrl}/addExpense`, expense);
  }

  travelRequests(status: string){
    return this.http.get(`${this.apiUrl}/travelRequests?status=${status}`);
  }
  
  approveBooking(id:string){
    return this.http.post(`${this.apiUrl}/approveRequest?bookingId=${id}`, null);
  }
  directorApproval(id:string){
    return this.http.post(`${this.apiUrl}/directorApproval?bookingId=${id}`,null);
  }
}
