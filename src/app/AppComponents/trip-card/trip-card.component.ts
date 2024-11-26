import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TravelRequest } from 'src/app/Models/TravelRequest.model';
import { TripsService } from 'src/app/Services/trips.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit, OnChanges {
  @Input() status!: string;
  travelRequests: TravelRequest[]  = [];
  constructor(private tripService: TripsService, private toastr: ToastrService){}
  ngOnInit() {
    this.getTravelRequests();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['status']){
      this.getTravelRequests();
    }
  }
  getTravelRequests(){    
    this.tripService.travelRequests(this.status).subscribe((res:any) =>{
      this.travelRequests = res.requests;
      console.log(res.requests);      
    });
  }
  approveBooking(id: string, index:number){
    this.tripService.approveBooking(id).subscribe((res:any) =>{
      console.log(res);      
      this.toastr.success(res.msg, 'success');
      this.travelRequests.splice(index,1);
    },
    err =>{
      this.toastr.error('Error Approving request', 'error');
    });
  }
  directorApproval(id: string, index:number){
    this.tripService.directorApproval(id).subscribe((res:any) =>{
      console.log(res);      
      this.toastr.warning(res.msg, 'Under review');
      this.travelRequests.splice(index,1);
    },
    err =>{
      this.toastr.error('Error Approving request', 'error');
    });
  }
}
