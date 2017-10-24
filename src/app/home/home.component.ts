

import { Component, OnInit, ElementRef } from '@angular/core';
//import { Router } from '@angular/router';

import { HomeService } from './home.service';

import { MainService } from '../shared/main.service';

import { PopupFormService } from '../shared/popupForm.service';

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
    private elementRef: ElementRef,
    private homeService: HomeService, 
    private mainService: MainService,
    private popupFormService: PopupFormService
  ) {
    console.log('elem--->', elementRef)
  }

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.homeService.getSlides().subscribe(data => this.slidesData = data);
  }

  editSlide() {
    this.popupFormService.openPopupForm();
  }

}
