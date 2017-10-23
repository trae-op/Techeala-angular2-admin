
import { Component, OnInit, Input } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  //selector: 'popup-form',
  template: `
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>One fine body - {{main}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="c('Close click')">Close</button>
      </div>
    </ng-template>
  `
})

export class PopupFormComponent {

  @Input() content: any[];

  main: string = 'hello!!!';

  constructor() {}

}
