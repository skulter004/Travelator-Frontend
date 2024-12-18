import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  showCards: boolean = true;
  childRoute: any = '';
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showCards = this.route.snapshot.firstChild === null;
      this.childRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    });
  }
  navigateTo(route: string) {
    this.router.navigate(['requests', route]);  
  }
}
