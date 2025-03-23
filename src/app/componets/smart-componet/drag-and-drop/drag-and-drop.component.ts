import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  dishes = [
    { name: 'Hot dogs' },
    { name: 'Hamburgers' },
    { name: 'Chicago style Pizzas' },
    { name: 'Apple pie' }
  ];

  images = [
    { name: 'Apple pie', url: '../../../assets/images/cuisine/apple_pie.png' },
    { name: 'Pizzas', url: '../../../assets/images/cuisine/pizza.png' },
    { name: 'Hamburgers', url: '../../../assets/images/cuisine/hamburguer.png' },
    { name: 'Hot dogs', url: '../../../assets/images/cuisine/hot_dog.png' },
    { name: 'Random', url: '../../../assets/images/cuisine/random.png' }
  ];

  draggedImage: any;

  drag(event: any, image: any) {
    this.draggedImage = image;
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event: any, dishName: string) {
    event.preventDefault();
    if (this.draggedImage.name === dishName) {
      console.log('Correct match!');
      // Aquí puedes agregar lógica para manejar la coincidencia correcta
    } else {
      console.log('Incorrect match!');
      // Aquí puedes agregar lógica para manejar la coincidencia incorrecta
    }
    this.draggedImage = null;
  }
}