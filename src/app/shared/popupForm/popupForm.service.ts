

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


//import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class PopupFormService {

  closeResult: string;

  constructor(
    private modalService: NgbModal
  ) {}
  
 // public menuData: Observable<any[]>;

  openPopupForm(content) {
    console.log('content--->>', content);
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

