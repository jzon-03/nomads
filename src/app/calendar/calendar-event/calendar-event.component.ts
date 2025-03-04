import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar-event',
  standalone: false,
  templateUrl: './calendar-event.component.html',
  styleUrl: './calendar-event.component.css'
})
export class CalendarEventComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
}
