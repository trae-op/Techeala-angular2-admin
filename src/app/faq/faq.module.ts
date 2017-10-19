


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FaqService } from './faq.service';

//import { AppComponent } from '../../app.component';
import { NgbdAccordionConfig } from './accordion-config.component';


import { FaqComponent } from './faq.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [
      NgbModule,
      BrowserModule,
      // FormsModule,
      // ReactiveFormsModule
    ],
    declarations: [
      FaqComponent,
      NgbdAccordionConfig
    ],
    providers: [FaqService]
})

export class FaqModule { }