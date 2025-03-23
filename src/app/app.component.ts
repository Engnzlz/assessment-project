import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarMenuComponent } from './componets/smart-componet/sidebar-menu/sidebar-menu.component'; 
import { GeographyCardComponent } from './modules/geography-card/geography-card.component';
import { HolidaysComponent } from "./modules/holidays/holidays.component";
import { SportsComponent } from "./modules/sports/sports.component";
import { CuisineComponent } from './modules/cuisine/cuisine.component';
import { LanguageComponent } from './modules/language/language.component';
import { CurrencyComponent } from './modules/currency/currency.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarMenuComponent,
    CommonModule,
    GeographyCardComponent, 
    HolidaysComponent,
    SportsComponent,
    CuisineComponent,
    LanguageComponent,
    CurrencyComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedComponent: string | null = null;

  handleComponentSelection(componentName: string) {
      this.selectedComponent = componentName;
  }
}