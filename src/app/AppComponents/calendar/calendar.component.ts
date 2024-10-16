import { Component, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: any;
  
  calendarOptions: any;

  constructor() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2024-10-15' }, 
        { title: 'Event 2', date: '2024-10-20' }, 
      ],
      dateClick: this.handleDateClick.bind(this), 
      eventClick: this.handleEventClick.bind(this),
    };
  }

  handleDateClick(arg: any) {
    alert('Date: ' + arg.dateStr);
  }

  handleEventClick(arg: any) {
    alert('Event: ' + arg.event.title);
  }
}
