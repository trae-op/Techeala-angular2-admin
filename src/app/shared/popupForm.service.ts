

import { Component, Injectable } from '@angular/core';
import { Overlay } from 'ngx-modialog';
//import { Modal } from 'ngx-modialog/plugins/bootstrap';

// for adding other services 
@Injectable()


// @Component({
//   template: `
//     <p>This is custom popup</p>
//     {{number}} <button (click)="number = number+1">increase number</button><br/>
//     <button (click)="popup.close()">close</button>
//   `
// })
// class CustomPopupComponent {
//   number: number = 0;
// }


export class PopupFormService {

  closeResult: string;

  constructor(
    //public modal: Modal
  ) {}

  openPopupForm() {
    // this.modal.alert()
    //   .size('lg')
    //   .showClose(true)
    //   .title('A simple Alert style modal window')
    //   //.component(CustomPopupComponent)
    //   // .body(`
    //   //   <h4>Alert is a classic (title/body/footer) 1 button modal window that 
    //   //   does not block.</h4>
    //   //   <b>Configuration:</b>
    //   //   <ul>
    //   //     <li>Non blocking (click anywhere outside to dismiss)</li>
    //   //     <li>Size large</li>
    //   //     <li>Dismissed with default keyboard key (ESC)</li>
    //   //     <li>Close wth button click</li>
    //   //     <li>HTML content</li>
    //   //   </ul>
        
    //   // `)
    //   .open()
    //   .then( dialogRef => {
    //     dialogRef.result.then( result => {
    //       console.log(dialogRef, result)
    //     });

    //     //dialogRef
    //   });
  }

  // send(v) {
  //   console.log(v)
  // }

}

