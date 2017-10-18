


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainService } from '../shared/main.service';

//import { AppComponent } from '../app.component';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';

@NgModule({
    imports: [
      BrowserModule
    ],
    declarations: [
      AboutComponent
    ],
    providers: [MainService, AboutService]
})

export class AboutModule { }