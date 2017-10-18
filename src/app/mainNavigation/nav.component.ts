import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainMenu } from '../shared/mainMenu';

@Component({
  selector: 'main-nav',
  templateUrl: './nav.component.html'
})

export class NavComponent {
  @Input() mainNav: MainMenu;
  titleNav: string = 'Nav';
}
