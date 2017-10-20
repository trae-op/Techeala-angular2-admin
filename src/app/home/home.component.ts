

import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { HomeService } from './home.service';

import { SlidesData } from './slidesData';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  titleHome: string = 'Home';

  slidesData: SlidesData[];

  closeResult: string;
  main: string;

  constructor(private homeService: HomeService, private modalService: NgbModal) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.homeService.getSlides().subscribe(data => this.slidesData = data);
  }


  open(content) {
    this.modalService.open(content)
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
