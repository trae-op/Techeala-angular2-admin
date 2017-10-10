


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//import { MainService } from '../../shared/main.service';

//import { AppComponent } from '../../app.component';
import { PortfolioComponent } from './portfolio.component';
import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      PortfolioComponent
    ],
    //providers: [MainService]
})

export class PortfolioModule { }