import { Component, OnInit } from '@angular/core';
import { dA } from '@fullcalendar/core/internal-common';
import { BookingInfo } from 'src/app/Models/BookingInfo.model';
import { CabService } from 'src/app/Services/cab.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit{
  bookings: BookingInfo[] = [];
  constructor(private cabServive: CabService){}
  date: Date | null = null;
  ngOnInit() {
    this.cabServive.myBooking(new Date().toISOString()).subscribe((res:any) =>{
      this.bookings = res.booking;
      console.log(res);      
    });
  }

  onDateSelected(date: Date){    
    this.date = date;
    this.cabServive.myBooking(date.toISOString()).subscribe((res:any) =>{
      this.bookings = res.booking;
      console.log(res);      
    });
  }  
}
