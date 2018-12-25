import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'currentDate',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  curdate: string  = new Date().toDateString() + new Date().toTimeString();
  constructor() { }

  ngOnInit() {
  }

}
