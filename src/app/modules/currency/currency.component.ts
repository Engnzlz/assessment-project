import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  coins = [
    { name: 'Quarter', imageUrl: '../../../assets/images/currency/quarter.png' },

    { name: 'Penny', imageUrl: '../../../assets/images/currency/quarter.png' },
  ];

  bills = [
    { name: 'Dollar', imageUrl: '../../../assets/images/currency/dollar.png', value: '$1' },
    { name: 'Five Dollar', imageUrl: '../../../assets/images/currency/5dollar.png'
      , value: '$5' }
  ];
}