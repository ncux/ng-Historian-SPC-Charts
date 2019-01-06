import { Component, OnInit } from '@angular/core';
import { QueryUrlBuilderService } from '../../query-url-builder.service';
import { ChartDataService } from '../../chart-data.service';

@Component({
  selector: 'app-ixmr',
  templateUrl: './ixmr.component.html',
  styleUrls: ['./ixmr.component.css']
})
export class IXMRComponent implements OnInit {

  constructor(private chartDataService: ChartDataService, private queryUrlService: QueryUrlBuilderService) { }

  tagName = '';

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = this.chartDataService.ChartLabels;
  public lineChartType = 'line';
  public lineChartLegend = false;
  //  lineChartData must be an array of objects like    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  public lineChartData;

  ngOnInit() {
    this.lineChartData = this.chartDataService.ChartDataObjectsArray;   // try to incorporate the tagsList so as to get the legends
    this.tagName = this.queryUrlService.tagName;
  }

}
