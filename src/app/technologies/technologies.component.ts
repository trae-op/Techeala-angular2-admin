


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../shared/main.service';


@Component({
  templateUrl: './technologies.component.html'
})

export class TechnologiesComponent implements OnInit {
  titleTechnologies: string = 'technologies';

  technologies: string[];

  constructor(private mainService: MainService, private router: Router) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.mainService.getData().subscribe(data => this.technologies = data[3].dataPage.technologies);
  }

}
