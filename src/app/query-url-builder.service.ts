import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ChartDataService } from './chart-data.service';

@Injectable({
  providedIn: 'root'
})
export class QueryUrlBuilderService {

  private dataUrl = environment.dataUrl;

  tagName = '';
  startDateValue;
  startTimeValue;
  endDateValue;
  endTimeValue;
  calcModeValue;
  countValue;
  intervalValue;

  constructor(private chartDataService: ChartDataService) { }

  buildQueryUrl() {
    // change interval value to milliseconds
    const milliseconds = Math.ceil((parseInt(this.intervalValue)) * 1000);
    this.chartDataService.dataQueryUrl = `${this.dataUrl}/${this.tagName}/${this.startDateValue}T${this.startTimeValue}/${this.endDateValue}T${this.endTimeValue}/${this.calcModeValue}/${this.countValue}/${milliseconds}`;
    // console.log(this.chartData.dataQueryUrl);
    this.chartDataService.tagName = this.tagName;
    this.chartDataService.getDataAndSetChartValues();
  }


}
