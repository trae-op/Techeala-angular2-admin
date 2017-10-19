


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PortfolioService } from './portfolio.service';

//import { AppComponent } from '../../app.component';
import { PortfolioComponent } from './portfolio.component';
//import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      PortfolioComponent
    ],
    providers: [PortfolioService]
})

export class PortfolioModule { }