import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ChartDataService } from './chart-data.service';

@Injectable({
  providedIn: 'root'
})
export class QueryUrlBuilderService {

  private dataUrl = environment.dataUrl;

  tagName = '';
  tagsListStringValues = [];
  startDateValue;
  startTimeValue;
  endDateValue;
  endTimeValue;
  calcModeValue;
  countValue;
  intervalValue;

  constructor(private chartData: ChartDataService) { }

  buildQueryUrl() {
    // change interval value to milliseconds
    const milliseconds = Math.ceil((parseInt(this.intervalValue)) * 1000);
    this.chartData.dataQueryUrl = `${this.dataUrl}/${this.tagName}/${this.startDateValue}T${this.startTimeValue}/${this.endDateValue}T${this.endTimeValue}/${this.calcModeValue}/${this.countValue}/${milliseconds}`;
    // console.log(this.chartData.dataQueryUrl);
    this.chartData.tagName = this.tagName;
    this.chartData.getDataAndSetChartValues();
  }


}
