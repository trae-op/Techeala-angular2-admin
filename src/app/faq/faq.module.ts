


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FaqService } from './faq.service';

//import { AppComponent } from '../../app.component';


import { FaqComponent } from './faq.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [
      BrowserModule,
      // FormsModule,
      // ReactiveFormsModule
    ],
    declarations: [
      FaqComponent
    ],
    providers: [FaqService]
})

export class FaqModule { }