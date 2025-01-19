import { Component } from '@angular/core';
import { NotificationService } from './Services/notification.service';
import { NavbarComponent } from './AppComponents/Shared/navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travelator';

  constructor(private notificationService: NotificationService){}
}
