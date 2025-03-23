import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  options1 = ['Wifi', 'Modem', 'Router'];
  options2 = ['Wireless', 'Fiber', 'Cables'];
  selectedOptions: string[] = [];
  currentBlankIndex = 0;
  showSuccess = false;
  showError = false;

  @ViewChildren('blank1, blank2, blank3, blank4, blank5, blank6') blanks!: QueryList<ElementRef>;

  selectOption(option: string) {
    if (this.currentBlankIndex < this.blanks.length) {
      this.selectedOptions[this.currentBlankIndex] = option;
      this.updateBlanks();
      this.currentBlankIndex++;
      this.checkCompletion();
    }
  }

  updateBlanks() {
    const blankElements = this.blanks.toArray();
    blankElements.forEach((blank, index) => {
      blank.nativeElement.textContent = this.selectedOptions[index] || '_________';
    });
  }

  checkCompletion() {
    if (this.currentBlankIndex === this.blanks.length) {
      this.showSuccess = true;
      this.showError = false;
    }
  }

  resetExercise() {
    this.selectedOptions = [];
    this.currentBlankIndex = 0;
    this.showSuccess = false;
    this.showError = false;
    this.updateBlanks();
  }
}