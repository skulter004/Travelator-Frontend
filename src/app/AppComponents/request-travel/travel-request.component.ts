import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TripsService } from 'src/app/Services/trips.service';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent {
  loading:boolean = false;
  travelForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private tripsService: TripsService, private toastr: ToastrService) {
    this.travelForm = this.fb.group({
      travelType: ['', Validators.required],
      estimatedCost: ['', Validators.required],
      destination: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      purpose: ['', Validators.required]
    });
  }
  requestTravel(){
    if(this.travelForm.valid){
      this.loading = true;
      this.tripsService.requestTravel(this.travelForm.value).subscribe((res:any) =>{
        console.log(res);     
        this.travelForm.reset();   
        this.toastr.success(res.msg, 'success');
        this.loading = false;
      },
    err =>{
      this.toastr.error("Failed to request travel", 'error');
      this.loading = false;
    });
    }else{
      this.toastr.warning('Fill in valid details', 'warning');
      this.loading = false;
    }
  }
}
