import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  selectedDay: number = 1;
  selectedMonth: string = 'JAN';
  months: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  daysInMonth: number[] = [];
  dayImages: { [key: number]: string } = {
    1: '../../../assets/images/newyear_image.jpg',
    15: '../../../assets/images/holiday_image.jpg' // Agrega más imágenes para otros días
  };
  currentImage: string = this.dayImages[this.selectedDay];

  constructor() { }

  ngOnInit(): void {
    this.updateDaysInMonth();
  }

  selectDay(day: number) {
    this.selectedDay = day;
    this.currentImage = this.dayImages[day];
  }

  selectMonth(month: string) {
    this.selectedMonth = month;
    this.updateDaysInMonth();
  }

  updateDaysInMonth() {
    // Lógica para determinar el número de días en un mes
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.daysInMonth = Array.from({ length: days[this.months.indexOf(this.selectedMonth)] }, (_, i) => i + 1);
  }
}