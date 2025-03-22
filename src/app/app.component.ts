import { Component } from '@angular/core';
import { SidebarMenuComponent } from './componets/smart-componet/sidebar-menu/sidebar-menu.component'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarMenuComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
}