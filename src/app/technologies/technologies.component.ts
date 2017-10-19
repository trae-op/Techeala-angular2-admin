


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TechnologiesData } from './technologiesData';

import { TechnologiesService } from './technologies.service';

@Component({
  templateUrl: './technologies.component.html'
})

export class TechnologiesComponent implements OnInit {
  titleTechnologies: string = 'technologies';

  technologies: TechnologiesData[];

  constructor(private technologiesService: TechnologiesService, private router: Router) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.technologiesService.getTechnologies().subscribe(data => this.technologies = data);
  }

}
