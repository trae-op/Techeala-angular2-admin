
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Feature Modules
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactsModule } from './contacts/contacts.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { FaqModule } from './faq/faq.module';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './mainNavigation/nav.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { ROUTES } from './app.routing';

import { MainService } from './shared/main.service';

import { MainData } from './shared/mainData';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    HomeModule,
    AboutModule,
    FaqModule,
    ContactsModule,
    VacanciesModule,
    PortfolioModule,
    TechnologiesModule,
    // BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  providers: [MainService, MainData],
  bootstrap: [AppComponent]
})

export class AppModule { }
