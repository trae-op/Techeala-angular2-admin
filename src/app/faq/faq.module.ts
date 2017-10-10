


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//import { MainService } from '../../shared/main.service';

//import { AppComponent } from '../../app.component';
import { FaqComponent } from './faq.component';
import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      FaqComponent
    ],
    //providers: [MainService]
})

export class FaqModule { }