


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FaqService } from './faq.service';

import { FaqData } from './faqData';

@Component({
  templateUrl: './faq.component.html'
})

export class FaqComponent implements OnInit {
  titleFaq: string = 'Faq';

  faqData: FaqData[];

  constructor(private faqService: FaqService, private router: Router) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.faqService.getFaq().subscribe(data => this.faqData = data);
  }


}
