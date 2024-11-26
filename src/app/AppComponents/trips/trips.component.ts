import { Component } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  status: string = 'Requested';

  setStatus(status: string){
    this.status = status;
  }
  isActive(option: string): boolean {
    return this.status === option;
  }
}
