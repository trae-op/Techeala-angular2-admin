


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//import { MainService } from '../../shared/main.service';

//import { AppComponent } from '../../app.component';
import { VacanciesComponent } from './vacancies.component';
import { MainService } from '../shared/main.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      VacanciesComponent
    ],
    //providers: [MainService]
})

export class VacanciesModule { }