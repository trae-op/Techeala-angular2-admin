


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { PageNotFoundComponent } from './page-not-found.component';


export const ROUTES = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
