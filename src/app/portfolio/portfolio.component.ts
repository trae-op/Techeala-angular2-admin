


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioService } from './portfolio.service';

import { PortfolioData } from './portfolioData';

@Component({
  templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
  titlePortfolio: string = 'Portfolio';

  projects: PortfolioData[];

  constructor(private portfolioService: PortfolioService, private router: Router) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.portfolioService.getPortfolio().subscribe(data => this.projects = data);
  }

}
