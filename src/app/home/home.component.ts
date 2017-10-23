

import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { HomeService } from './home.service';

import { MainService } from '../shared/main.service';

import { PopupFormService } from '../shared/popupForm/popupForm.service';

import { SlidesData } from './slidesData';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  titleHome: string = 'Home';

  slidesData: SlidesData[];

  //closeResult: string;

  dataPopupForm: any[] = [
    {
      type: 'input'
    },
    {
      type: 'textarea'
    }
  ];

  constructor(
    private homeService: HomeService, 
    private mainService: MainService,
    private popupFormService: PopupFormService
  ) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.homeService.getSlides().subscribe(data => this.slidesData = data);
  }


  open(content) {
    this.popupFormService.openPopupForm(content);
  }

}
