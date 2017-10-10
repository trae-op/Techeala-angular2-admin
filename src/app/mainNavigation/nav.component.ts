import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainData } from '../shared/mainData';

@Component({
  selector: 'main-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent {
  @Input() mainNav: MainData;
  titleNav: string = 'Nav';
}
