import { Component, OnInit } from '@angular/core';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, format, isSameDay } from 'date-fns';

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
  
  events: { [key: string]: string } = { 
    '2025-03-06': 'Murphy Exclusive Weapon', 
    '2025-03-20': 'Carlie exclusive Weapon', 
    '2025-04-10': 'Swift exclusive Weapon', 
    '2025-04-28': 'Age Of Oil/Tempest Beast', 
  };

  ngOnInit() {
    this.generateCalendar(this.currentDate);
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
    console.log(this.selectedDate)
  }

  getEventLabel(date: Date): string | null {
    const key = format(date, 'yyyy-MM-dd');
    return this.events[key] || null;
  }
}
