import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-retention-glossary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './retention-glossary.component.html',
  styleUrls: ['./retention-glossary.component.scss']
})
export class RetentionGlossaryComponent implements OnInit {
  terms = [
    { term: 'Retención de Clientes', definition: 'Acciones para mantener a los clientes a largo plazo.' },
    { term: 'Tasa de Abandono', definition: 'Porcentaje de clientes que dejan de usar un producto o servicio.' },
    { term: 'Valor de Vida del Cliente', definition: 'Predicción del valor neto atribuido a la relación completa con un cliente.' },
    { term: 'Customer Journey', definition: 'El recorrido del cliente es el total de experiencias que los clientes tienen al interactuar con tu marca o empresa.' },
    // Agrega más términos aquí
  ];

  filteredTerms: any[] = [];
  selectedTerm: any;
  searchTerm: string = '';

  ngOnInit(): void {
    this.filteredTerms = [...this.terms]; // Inicializar filteredTerms con todos los términos al inicio
  }

  showDefinition(term: any) {
    this.selectedTerm = this.selectedTerm === term ? null : term; // Función para mostrar/ocultar la definición
  }

  filterTerms() {
    this.filteredTerms = this.terms.filter(term => term.term.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}