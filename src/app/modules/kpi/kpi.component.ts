import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent {
  kpis = [
    {
      title: 'Ingresos Mensuales',
      value: '$50,000',
      trend: '↑ 20%',
      trendClass: 'trend-up',
      period: 'Mes Actual',
      description: 'Ingresos totales generados en el mes actual.'
    },
    {
      title: 'Tasa de Conversión',
      value: '2.5%',
      trend: '↓ 0.5%',
      trendClass: 'trend-down',
      period: 'Últimos 7 días',
      description: 'Porcentaje de visitantes que completaron una acción deseada.'
    },
    {
      title: 'Satisfacción del Cliente',
      value: '4.8/5',
      trend: '→',
      trendClass: 'trend-stable',
      period: 'Último Trimestre',
      description: 'Puntuación promedio de satisfacción del cliente.'
    },
    {
      title: 'Usuarios Activos Diarios',
      value: '12,345',
      trend: '↑ 5%',
      trendClass: 'trend-up',
      period: 'Hoy',
      description: 'Número de usuarios únicos que interactuaron con la plataforma hoy.'
    },
  ];
}