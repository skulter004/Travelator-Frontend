import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CabService } from 'src/app/Services/cab.service';

@Component({
  selector: 'app-book-cab',
  templateUrl: './book-cab.component.html',
  styleUrls: ['./book-cab.component.css']
})
export class BookCabComponent {
  loading: boolean = false;
  cabForm!: FormGroup;
    
  constructor(private fb: FormBuilder, private cabService: CabService, private toastr: ToastrService) {
    this.cabForm = this.fb.group({
      pickUp: ['', Validators.required],
      dropOff: ['', Validators.required],
      time: ['', Validators.required],
      monthlyRequest: [false, Validators.required]
    });
  }

  requestBooking(){
    if(this.cabForm.valid){
      this.loading=true;
      this.cabService.requestBooking(this.cabForm.value).subscribe(res =>{
        this.cabForm.reset();
        this.toastr.success('Cab Requested Succesfully', 'success')
        this.loading=false;
      },
    err =>{
      this.toastr.error('Failed to request cab', 'error')
      this.loading=false;
    });
    }else{
      this.toastr.warning('fill in valid details', 'Error');
      this.loading=false;
    }
  }
}
