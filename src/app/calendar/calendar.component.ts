import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, format, isSameDay } from 'date-fns';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: false
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  daysInMonth: Date[] = [];
  monthLabel: string = '';
  selectedDate: Date | null = null;
  
  events!: { [key: string]: any };

  constructor(
    private _dialog: MatDialog,
    private _eventService: EventsService
  ){}

  ngOnInit() {
    this.generateCalendar(this.currentDate);
    this._eventService.getEvents().subscribe({
      next:(res)=>{
        this.events = res;
      }
    })
  }

  generateCalendar(date: Date) {
    this.daysInMonth = [];
    this.monthLabel = format(date, 'MMMM yyyy');

    let start = startOfWeek(startOfMonth(date));
    let end = endOfWeek(endOfMonth(date));

    let day = start;
    while (day <= end) {
      this.daysInMonth.push(day);
      day = addDays(day, 1);
    }
  }

  prevMonth() {
    this.currentDate = subMonths(this.currentDate, 1);
    this.generateCalendar(this.currentDate);
  }

  nextMonth() {
    this.currentDate = addMonths(this.currentDate, 1);
    this.generateCalendar(this.currentDate);
  }

  isToday(date: Date): boolean {
    return isSameDay(date, new Date());
  }

  isSameDay(date:Date, selectedDate: Date){
    isSameDay(date,selectedDate);
  }

  selectDay(day: Date) {
    this.selectedDate = day;
    const key = format(day, 'yyyy-MM-dd');
    const event = this.events[key] ? this.events[key] : null;
    this._dialog.open(CalendarEventComponent, {
      data: event
    })
  }

  getEventLabel(date: Date): string | null {
    const key = format(date, 'yyyy-MM-dd');
    return this.events[key] ? this.events[key].title : null;
  }
  
}
