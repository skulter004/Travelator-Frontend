import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabBooking } from '../Models/CabBooking.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private apiUrl = `${environment.baseUrl}/api/Cabs`; 
  constructor(private http: HttpClient) { }

  requestBooking(booking: any){
    return this.http.post(`${this.apiUrl}/requestBooking`, booking);
  }

  cabDetails(){
    return this.http.get(`${this.apiUrl}/cabDetails`);
  }
  
  request(id: string){
    return this.http.get(`${this.apiUrl}/request/${id}`);
  }

  requests(){
    return this.http.get(`${this.apiUrl}/requests`);
  }

  cabs(){
    return this.http.get(`${this.apiUrl}/availableCabs`);
  }

  approveBooking(booking: CabBooking){
    return this.http.post(`${this.apiUrl}/approveBooking`, booking);
  }

  myBooking(date?: any){
    return this.http.get(`${this.apiUrl}/myBookings?date=${date}`);
  }
}
