import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './shared/main.service';

import { MainMenu } from './shared/mainMenu';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string = 'Techeala';

  mainMenu: MainMenu[];

  constructor(private mainService: MainService) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.mainService.getMainMenu().subscribe(data => this.mainMenu = data);
  }

}
