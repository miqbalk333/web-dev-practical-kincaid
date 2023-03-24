import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

interface Date {
  version: string,
  updateDate: string,
  environment: string
}

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateObj: Date = {
    version: '',
    updateDate: '',
    environment: ''
  }

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.getDate().subscribe((data)=>{
      console.log("Data: ", data);
      this.dateObj = <Date> data
    });
  }

}
