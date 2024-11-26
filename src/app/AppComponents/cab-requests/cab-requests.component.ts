import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cabRequestModel } from 'src/app/Models/cabRequest.model';
import { CabService } from 'src/app/Services/cab.service';

@Component({
  selector: 'app-cab-requests',
  templateUrl: './cab-requests.component.html',
  styleUrls: ['./cab-requests.component.css']
})
export class CabRequestsComponent {
  
  showCards: boolean = true;
  cabRequests: cabRequestModel[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private cabService: CabService){}

  ngOnInit() {    
    this.router.events.subscribe(() => {
      this.showCards = this.route.snapshot.firstChild === null;
    });   

    this.cabService.requests().subscribe((res:any) =>{
      this.cabRequests = res.details;
    });

  }

  navigateToAssign(request: cabRequestModel) {
    this.router.navigate(['requests/cab/assign'], { state: { requestData: request } });
  }
}
