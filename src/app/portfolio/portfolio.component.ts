


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../shared/main.service';

import { PortfolioData } from './portfolioData';

@Component({
  templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
  titlePortfolio: string = 'Portfolio';

  projects: PortfolioData[];

  constructor(private mainService: MainService, private router: Router) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.mainService.getData().subscribe(data => this.projects = data[2].dataPage.projects);
  }

}
