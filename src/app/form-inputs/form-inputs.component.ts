import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TagsService } from '../tags.service';
import { QueryUrlBuilderService } from '../query-url-builder.service';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  tagsListArray: any[] = [];

  constructor(private tagsGetterService: TagsService, private queryUrlService: QueryUrlBuilderService) { }

  ngOnInit() {
    this.getTags();
  }


  getTags() {
    this.tagsGetterService.getAllTags();
    this.tagsListArray = this.tagsGetterService.tagsArray;
  }


  plot(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // console.log(form.value);
    console.log(form.value.tag);   //  checking individual inputs

    this.queryUrlService.tagName = form.value.tag;
    this.queryUrlService.startDateValue = form.value.startDate;
    this.queryUrlService.startTimeValue = form.value.startTime;
    this.queryUrlService.endDateValue = form.value.endDate;
    this.queryUrlService.endTimeValue = form.value.endTime;
    this.queryUrlService.calcModeValue = form.value.calcMode;
    this.queryUrlService.countValue = form.value.count;
    this.queryUrlService.intervalValue = form.value.interval;
    //
    this.queryUrlService.buildQueryUrl();
    (<HTMLElement>document.querySelector('#nav-container')).style.display = 'block';
  }


}
