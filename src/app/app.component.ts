import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './shared/main.service';

import { MainData } from './shared/mainData';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string = 'Techeala';

  mainData: MainData[];

  constructor(private mainService: MainService) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    this.mainService.getData().subscribe(data => this.mainData = data);
  }

}
