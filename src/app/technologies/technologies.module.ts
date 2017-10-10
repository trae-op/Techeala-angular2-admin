


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//import { MainService } from '../../shared/main.service';

//import { AppComponent } from '../../app.component';
import { TechnologiesComponent } from './technologies.component';
import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      TechnologiesComponent
    ],
    //providers: [MainService]
})

export class TechnologiesModule { }