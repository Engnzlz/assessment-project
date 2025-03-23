import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SidebarMenuComponent } from './componets/smart-componet/sidebar-menu/sidebar-menu.component'; 
import { GeographyCardComponent } from './modules/geography-card/geography-card.component';
import { HolidaysComponent } from "./modules/holidays/holidays.component";
import { SportsComponent } from "./modules/sports/sports.component";
import { CuisineComponent } from './modules/cuisine/cuisine.component';
import { LanguageComponent } from './modules/language/language.component';
import { CurrencyComponent } from './modules/currency/currency.component';
import { KpiComponent } from './modules/kpi/kpi.component';
import { GlossaryComponent } from './modules/glossary/glossary.component';
import { TechnicalKnowledgeComponent } from './modules/technical-knowledge/technical-knowledge.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { SystemsComponent } from './modules/systems/systems.component';
import { RetentionGlossaryComponent } from './modules/retention-glossary/retention-glossary.component';
import { StepsOfRetentionComponent } from './modules/steps-of-retention/steps-of-retention.component';
import { HomeComponent } from './modules/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    SidebarMenuComponent,
    CommonModule,
    GeographyCardComponent, 
    HolidaysComponent,
    SportsComponent,
    CuisineComponent,
    LanguageComponent,
    CurrencyComponent,
    KpiComponent,
    GlossaryComponent,
    TechnicalKnowledgeComponent,
    CustomersComponent,
    SystemsComponent,
    RetentionGlossaryComponent,
    StepsOfRetentionComponent,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
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