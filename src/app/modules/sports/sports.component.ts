import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent {
  sportsPeople = [
    {
      name: 'Person 1',
      sport: 'BASEBALL',
      image: '../../../assets/images/sports/person1.png',
      description: 'Info about Person 1.'
    },
    {
      name: 'Person 2',
      sport: 'BASEBALL',
      image: '../../../assets/images/sports/person2.png',
      description: 'Info about Person 2.'
    },
    {
      name: 'Person 3',
      sport: 'BASEBALL',
      image: '../../../assets/images/sports/person3.png',
      description: 'Info about Person 3.'
    },
    {
      name: 'Person 4',
      sport: 'SOCCER',
      image: '../../../assets/images/sports/person4.png',
      description: 'Info about Person 4.'
    },
    {
      name: 'Person 5',
      sport: 'VOLLEYBALL',
      image: '../../../assets/images/sports/person5.png',
      description: 'Info about Person 5.'
    },
    {
        name: 'Person 6',
        sport: 'SOFTBALL',
        image: '../../../assets/images/sports/person6.png',
        description: 'Info about Person 6.'
      },
      {
        name: 'Person 7',
        sport: 'ICE SKIING',
        image: '../../../assets/images/sports/person7.png',
        description: 'Info about Person 7.'
      },
      {
        name: 'Person 8',
        sport: 'CURLING',
        image: '../../../assets/images/sports/person8.png',
        description: 'Info about Person 8.'
      },
      {
        name: 'Person 9',
        sport: 'ICEHOCKEY',
        image: '../../../assets/images/sports/person9.png',
        description: 'Info about Person 9.'
      },
  ];

  selectedPerson: any;

  selectPerson(person: any) {
    this.selectedPerson = person;
  }
}