import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: any;
  @Output() dateClicked = new EventEmitter<Date>();
  
  calendarOptions: any;

  constructor() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [
      ],
      dateClick: (info:any) => this.handleDateClick(new Date(info.dateStr)), 
      eventClick: this.handleEventClick.bind(this),
    };
  }

  handleDateClick(date: Date) {
    this.dateClicked.emit(date);
  }

  handleEventClick(arg: any) {
    alert('Event: ' + arg.event.title);
  }
}
