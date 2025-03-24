import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  // Ejercicio 1 (Completar espacios en blanco)
  options1 = ['Wifi', 'Modem', 'Router'];
  options2 = ['Wireless', 'Fiber', 'Cables'];
  selectedOptions: string[] = [];
  currentBlankIndex = 0;
  showExercise1Success = false;
  showExercise1Error = false;
  showExercise2 = false;

  // Ejercicio 2 (Drag and drop)
  dragAndDropSentences = [
    { content: 'Listen to the customer\'s emotions, needs and desires.', originalIndex: 0 },
    { content: 'Take note of those things, as they are important to our customers.', originalIndex: 1 },
    { content: 'You can open the conversation by saying, "Please let me know your concern and why you would like to eliminate your services."', originalIndex: 2 },
  ];
  correctSentencesOrder = [0, 1, 2]; // Índices originales en el orden correcto
  showSentencesSuccess = false;
  showSentencesError = false;

  @ViewChildren('blank1, blank2, blank3, blank4, blank5, blank6') blanks!: QueryList<ElementRef>;

  // Ejercicio 1 Functions
  selectOption(option: string) {
    if (this.currentBlankIndex < this.blanks.length) {
      this.selectedOptions[this.currentBlankIndex] = option;
      this.updateBlanks();
      this.currentBlankIndex++;
      this.checkExercise1Completion();
    }
  }

  updateBlanks() {
    const blankElements = this.blanks.toArray();
    blankElements.forEach((blank, index) => {
      blank.nativeElement.textContent = this.selectedOptions[index] || '_________';
    });
  }

  checkExercise1Completion() {
    if (this.currentBlankIndex === this.blanks.length) {
      this.showExercise1Success = true;
      this.showExercise1Error = false;
      this.showExercise2 = true; // Mostrar el ejercicio 2 después de completar el ejercicio 1
    }
  }

  resetExercise() {
    this.selectedOptions = [];
    this.currentBlankIndex = 0;
    this.showExercise1Success = false;
    this.showExercise1Error = false;
    this.updateBlanks();
    this.showExercise2 = false;
  }

  // Ejercicio 2 Functions
  dropSentences(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.dragAndDropSentences, event.previousIndex, event.currentIndex);
  }

  checkSentencesOrder() {
    const currentOrder = this.dragAndDropSentences.map(item => item.originalIndex);
    if (JSON.stringify(currentOrder) === JSON.stringify(this.correctSentencesOrder)) {
      this.showSentencesSuccess = true;
      this.showSentencesError = false;
    } else {
      this.showSentencesSuccess = false;
      this.showSentencesError = true;
    }
  }
}