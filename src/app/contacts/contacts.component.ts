


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


  mapCoordinates: any = {
    lng: Number,
    lat: Number
  };

  positions: Object[] = [];

  contacts: ContactsData[];

  constructor(private contactsService: ContactsService, private router: Router) {}

  // this method from the angular box
  // it start run at initialization of component
  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => this.contacts = data);
    this.contactsService.getMapCoordinates().subscribe(data => this.mapCoordinates = data[0]);
  }


  onMapReady(map: any) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event: any) {
    console.log('map', event.target);
    this.positions.push([this.mapCoordinates.lat, this.mapCoordinates.lng]);
  }
  onMarkerInit(marker: any) {
    console.log('marker', marker);
  }
  onMapClick(event: any) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }

}
