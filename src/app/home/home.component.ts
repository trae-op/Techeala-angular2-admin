

import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { MainService } from '../shared/main.service';

import { SlidesData } from './slidesData';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  titleHome: string = 'Home';

  slidesData: SlidesData[];

  constructor(private mainService: MainService) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.mainService.getData().subscribe(data => this.slidesData = data[0].dataPage.slides);
  }

}
