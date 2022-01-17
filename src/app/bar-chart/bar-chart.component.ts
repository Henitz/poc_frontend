import { GraficosService } from './../graficos.service';
import { MedicosService } from 'src/app/medicos.service';
import { Consultas } from 'src/app/consultas';
import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConsultaService } from '../consulta.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Medicos } from '../medicos';
import { Graficos } from '../graficos';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {


  grafico: Graficos[] = [];



  constructor(private service: GraficosService

    ) {
  }

  ngOnInit(): void {
      this.service.getTotais().subscribe(
      data =>{
        this.barChartData[0].data = data.map(c=> parseInt((c.total).toString()))
        this.barChartLabels = data.map(c => c.categoria)
      })
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };
  barChartColors: Color[] = [
  {
    borderColor: [
      'rgba(255,0,0,0.5)',
      'rgba(54, 75, 181, 0.5)',
      'rgba(114, 155, 59, 0.5)',
      'rgba(102, 59, 155, 0.5)'
    ],
    backgroundColor: [
      'rgba(255,0,0,0.3)',
      'rgba(54, 75, 181, 0.3)',
      'rgba(114, 155, 59, 0.3)',
      'rgba(102, 59, 155, 0.3)'
    ]
  }];

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Totais' }
  ];
}
