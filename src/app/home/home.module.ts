

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppModule } from '../../app.module';


//import { MainService } from '../../shared/main.service';

import { HomeComponent } from './home.component';
//import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      HomeComponent
    ],
    //providers: [MainService]
})

export class HomeModule { }