import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ToastrModule, ToastrService } from 'ngx-toastr';

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
      .withUrl('https://localhost:7034/notificationHub', {
        accessTokenFactory: () => {
          return localStorage.getItem('token') || '';
        }
      })
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection established'))
      .catch((err) => console.error('Error while establishing SignalR connection:', err));
  }

  private registerEvents() {
    this.hubConnection.on('ReceiveNotification', (message: string) => {
      this.toastr.info(message, 'Notification');
    });
  }
}
