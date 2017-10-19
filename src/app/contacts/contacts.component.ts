


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from './contacts.service';

import { ContactsData } from './contactsData';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.scss']
})

export class ContactsComponent implements OnInit {
  titleContacts: string = 'Contacts';
  skype: string;
  phone: string;
  email: string;
  mapCoordinates: Object;
  mapCoordinatesLat: number;
  mapCoordinatesLng: number;
  positions: Object[] = [];
  inputForm: string = '';

  contacts: ContactsData[];

  constructor(private contactsService: ContactsService, private router: Router) {}

  // // this method from the angular box
  // // it start run at initialization of component
  ngOnInit() {
    // this.mainService.getData().subscribe(data => {
    //   this.skype = data[5].dataPage.skype;
    //   this.phone = data[5].dataPage.phone;
    //   this.email = data[5].dataPage.email;
    //   this.mapCoordinates = data[5].dataPage.mapCoordinates;
    //   this.mapCoordinatesLat = data[5].dataPage.mapCoordinates.lat;
    //   this.mapCoordinatesLng = data[5].dataPage.mapCoordinates.lng;
    // });
    this.contactsService.getContacts().subscribe(data => this.contacts = data);
  }


  onSubmit() {
    console.log('input form\n', this.inputForm);
  }

  onMapReady(map: any) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event: any) {
    console.log('map', event.target);
    this.positions.push([37.775, -122.434]);
  }
  onMarkerInit(marker: any) {
    console.log('marker', marker);
  }
  onMapClick(event: any) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }

}
