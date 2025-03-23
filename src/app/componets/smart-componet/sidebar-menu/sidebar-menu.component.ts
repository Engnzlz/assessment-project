import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar-menu.component.html',
    styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
    @Output() showGeography = new EventEmitter<boolean>();
    @Output() showHolidays = new EventEmitter<boolean>();

    showDropdown: string | null = null;
    knowledgeCheckDropdownVisible: boolean = false;

    toggleDropdown(dropdownName: string) {
        if (this.showDropdown === dropdownName) {
            this.showDropdown = null;
        } else {
            this.showDropdown = dropdownName;
        }
    }

    toggleKnowledgeCheckDropdown() {
        this.knowledgeCheckDropdownVisible = !this.knowledgeCheckDropdownVisible;
    }

    showGeographyCard() {
      this.showGeography.emit(true);
    }

    showHolidaysCard() {
      this.showHolidays.emit(true);
    }
}