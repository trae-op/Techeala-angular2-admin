


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AboutService } from './about.service';

import { TeamGallery } from './teamGallery';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.scss']
})

export class AboutComponent implements OnInit {
  
  titleAbout: string = 'About';
  description: string[];
  gallery: TeamGallery[];
  private base64textString: String = "";

   closeResult: string;

  constructor(private aboutService: AboutService, private router: Router, private modalService: NgbModal) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.aboutService.getTeamGallery().subscribe(data => this.gallery = data);
    this.aboutService.getDescription().subscribe(data => this.description = data);
  }






handleFileSelect(evt: any){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt: any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= 'data:image/png;base64,' + btoa(binaryString);
            console.log(this.base64textString);
    }







    open(content: any) {
      this.modalService.open(content).result.then((result) => {
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
