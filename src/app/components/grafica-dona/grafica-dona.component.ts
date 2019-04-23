import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {
  @Input() labels : Label[];
  @Input() dataSet : MultiDataSet;
  @Input() charType : ChartType;


  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  this.doughnutChartLabels= this.labels;
  this.doughnutChartData= this.dataSet;
  this.doughnutChartType = this.charType;

  }

}
