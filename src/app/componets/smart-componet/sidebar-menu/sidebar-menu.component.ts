import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
    @Output() componentSelected = new EventEmitter<string>();

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

    selectComponent(componentName: string) {
        this.componentSelected.emit(componentName);
    }
}