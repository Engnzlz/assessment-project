import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './componets/smart-componet/sidebar-menu/sidebar-menu.component'; 
import { GeographyCardComponent } from './modules/geography-card/geography-card.component';
import { HolidaysComponent } from "./modules/holidays/holidays.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarMenuComponent,
    CommonModule,
    GeographyCardComponent, 
    HolidaysComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showGeography: boolean = false;
  showHolidays: boolean = false;
}