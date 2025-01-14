import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private hubConnection!: HubConnection;

  constructor(private toastr: ToastrService) {
    this.startConnection();
    this.registerEvents();
  }

  private startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/notificationHub`, {
        accessTokenFactory: () => {
          return localStorage.getItem('token') || '';
        }
      })
      .build();

    this.hubConnection
      .start()
      .then()
      .catch((err) => console.error('Error while establishing SignalR connection:', err));
  }

  private registerEvents() {
    this.hubConnection.on('ReceiveNotification', (message: string) => {
      this.toastr.info(message, 'Notification');
    });
  }
}
