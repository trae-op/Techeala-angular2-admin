

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { NgbdModalComponent } from '../shared/popupForm/popupForm.component';

import { HomeService } from './home.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      HomeComponent,
      NgbdModalComponent
    ],
    providers: [HomeService]
})

export class HomeModule { }