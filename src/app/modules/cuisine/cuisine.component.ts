import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from '../../componets/smart-componet/drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-cuisine',
  imports: [
    CommonModule,
    DragAndDropComponent
  ],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {

}
