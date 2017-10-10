


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../shared/main.service';

import { VacanciesData } from './vacanciesData';

@Component({
  templateUrl: './vacancies.component.html'
})

export class VacanciesComponent implements OnInit {
  titleVacancies: string = 'vacancies';

  vacancies: VacanciesData[];

  constructor(private mainService: MainService, private router: Router) {
    this.vacancies = [];
  }

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.mainService.getData().subscribe(data => this.vacancies = data[4].dataPage.vacancies);
    //this.router.navigateByUrl('/vacancies');
  }

}
