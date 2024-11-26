import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AvailableCabs } from 'src/app/Models/availableCabs.model';
import { CabBooking } from 'src/app/Models/CabBooking.model';
import { cabRequestModel } from 'src/app/Models/cabRequest.model';
import { CabService } from 'src/app/Services/cab.service';

@Component({
  selector: 'app-assign-cab',
  templateUrl: './assign-cab.component.html',
  styleUrls: ['./assign-cab.component.css']
})
export class AssignCabComponent implements OnInit {
  availableCabs: AvailableCabs[] = [];
  request!: cabRequestModel;
  constructor(private cabService: CabService, private router: Router, private toastr: ToastrService){}

  ngOnInit() {
    this.cabService.cabs().subscribe((res:any)=>{
      this.availableCabs = res.details;    
    });

    this.request = history.state.requestData;
  }
  assignCab(cab: AvailableCabs){
    let booking: CabBooking= {
      cabId: cab.cabId,
      employeeId: this.request.employeeId,
      pickUp: this.request.pickUp,
      dropOff: this.request.dropOff,
      time: this.request.time,
      monthlyRequest: false
    }
    this.cabService.approveBooking(booking).subscribe(res => {
      console.log(res);      
      this.toastr.success('cab assigned succesfully', 'success');
      this.router.navigate(['requests/cab'])
    });
  }
}
