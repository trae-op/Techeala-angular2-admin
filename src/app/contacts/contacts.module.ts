


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NguiMapModule} from '@ngui/map';
import { FormsModule } from '@angular/forms';


//import { MainService } from '../../shared/main.service';

//import { AppComponent } from '../../app.component';
import { ContactsComponent } from './contacts.component';
import { MainService } from '../shared/main.service';
//http://maps.googleapis.com/maps/api/js?callback=googleMapsLoaded&sensor=false
@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDOfJ38iEg7UzKKISk9DuzoctwKii1ASrs'})
    ],
    declarations: [
      ContactsComponent
    ],
    //providers: [MainService]
})

export class ContactsModule { }
