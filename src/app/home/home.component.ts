

import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { HomeService } from './home.service';

import { SlidesData } from './slidesData';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  titleHome: string = 'Home';

  slidesData: SlidesData[];

  constructor(private homeService: HomeService) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.homeService.getSlides().subscribe(data => this.slidesData = data);
  }

}
