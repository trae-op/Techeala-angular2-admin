
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//import { ModalModule } from 'ngx-modialog';
//import { BootstrapModalModule, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';

//import { Ng2PopupModule } from 'ng2-popup';

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
import { PopupFormService } from './shared/popupForm.service';

import { MainData } from './shared/mainData';

//bootstrap4Mode();

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
    //ModalModule.forRoot(),
    //BootstrapModalModule,
    //Ng2PopupModule
    // BrowserAnimationsModule,
    // MatButtonModule, MatCheckboxModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  providers: [MainService, MainData, PopupFormService],
  bootstrap: [AppComponent]
})

export class AppModule { }
