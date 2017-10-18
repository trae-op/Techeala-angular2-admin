


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../shared/main.service';

import { FaqData } from './faqData';

@Component({
  templateUrl: './faq.component.html'
})

export class FaqComponent implements OnInit {
  titleFaq: string = 'Faq';

  faqData: FaqData[];

  constructor(private mainService: MainService, private router: Router) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    //this.mainService.getData().subscribe(data => this.faqData = data[6].dataPage.faq);
  }

}
