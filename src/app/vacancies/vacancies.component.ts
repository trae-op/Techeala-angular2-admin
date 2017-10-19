


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VacanciesService } from './vacancies.service';

import { VacanciesData } from './vacanciesData';

@Component({
  templateUrl: './vacancies.component.html'
})

export class VacanciesComponent implements OnInit {
  titleVacancies: string = 'vacancies';

  vacancies: VacanciesData[];

  constructor(private vacanciesService: VacanciesService, private router: Router) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.vacanciesService.getVacancies().subscribe(data => this.vacancies = data);
  }

}
