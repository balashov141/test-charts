import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as faker from 'faker/locale/ru';
import { map } from 'rxjs/operators';
import { DatapickerComponent } from '../../datapicker/datapicker.component';

@Component({
  selector: 'cd-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.scss' ],
  providers: [ DatapickerComponent ]
})

export class ChartComponent implements OnInit {

  @Input() chartType: ChartType;
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  numArray = new Array(20).fill({});
  dataset = this.numArray.map((item) => {
    return item = faker.random.number({'min': 100,'max': 300});
  });

  public chartData: ChartDataSets[] = [
    { data:  this.dataset , label: 'Series A' },
    { data:  this.dataset , label: 'Series B' }
  ];

  public chartLabels:number[] = [];
  public chartLegend = true;
  public chartPlugins = [];

  constructor ( private datapickercomponent: DatapickerComponent) { }

  getYear() {
    return this.datapickercomponent.yearsList;
  }


  ngOnInit() {
    
    this.chartType = this.chartType;
    this.chartLabels = this.datapickercomponent.getYear();

    console.log(this.datapickercomponent.yearsList)
  }

}
