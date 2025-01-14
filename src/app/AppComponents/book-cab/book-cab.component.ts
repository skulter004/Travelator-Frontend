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
      this.cabService.requestBooking(this.cabForm.value).subscribe(res =>{
        this.cabForm.reset();
        this.toastr.success('Cab Requested Succesfully', 'success')
      },
    err =>{
      this.toastr.error('Failed to request cab', 'error')
    });
    }else{
      this.toastr.warning('fill in valid details', 'Error');
    }
  }
}
