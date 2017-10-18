

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

import { HomeService } from './home.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      HomeComponent
    ],
    providers: [HomeService]
})

export class HomeModule { }