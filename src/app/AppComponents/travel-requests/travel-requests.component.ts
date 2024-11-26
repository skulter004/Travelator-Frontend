import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-requests',
  templateUrl: './travel-requests.component.html',
  styleUrls: ['./travel-requests.component.css']
})
export class TravelRequestsComponent {
  status: string = 'Requested';

  setStatus(status: string){
    this.status = status;
  }
  isActive(option: string): boolean {
    return this.status === option;
  }
}
