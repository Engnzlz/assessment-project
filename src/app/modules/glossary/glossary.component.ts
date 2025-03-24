import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  activeLetter = '';
  glossaryItems = [
    {
      title: 'Alarm',
      definition: 'Use the word alarms when speaking to the notifications provided when baby\'s vitals fall outside of preset ranges.',
      imageUrl: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--41YTIa7S--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1645044845067/HERO.jpeg',
      firstLetter: 'A'
    },
    {
      title: 'Body Temperature',
      definition: 'Measure of how well the body can produce and get rid of heat.',
      imageUrl: 'https://assets.clevelandclinic.org/transform/72806642-3c54-4bd4-971d-0fb0fdba42ea/bodyTempNormal-marty-033020-770x533-1_jpg',
      firstLetter: 'B'
    },
    {
      title: 'Cellular Data',
      definition: 'Mobile internet connection accessed through a cellular network.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH6dW8GS4O5YbAMNhYsmuwcKsLh2YxcyBPg&s',
      firstLetter: 'C'
    },
    {
      title: 'Device',
      definition: 'An electronic machine or piece of equipment which performs a specific task.',
      imageUrl: 'https://img.freepik.com/foto-gratis/digital-divice-smartphone-tomando-foto-postre_53876-23304.jpg',
      firstLetter: 'D'
    }
  ];
  filteredItems: { title: string; definition: string; imageUrl: string; firstLetter: string; }[] = [];
  lettersWithDefinitions: string[] = [];

  constructor() {
    this.lettersWithDefinitions = [...new Set(this.glossaryItems.map(item => item.firstLetter))];
  }

  filterByLetter(letter: string) {
    this.activeLetter = letter;
    if (letter) {
      this.filteredItems = this.glossaryItems.filter(item => item.firstLetter === letter);
    } else {
      this.filteredItems = []; // No muestra nada si no hay letra seleccionada
    }
  }
}