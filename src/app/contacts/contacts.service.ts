

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MainService } from '../shared/main.service';

import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class ContactsService {

  constructor(private http: Http, private mainService: MainService, private mainData: MainData) {}
  
  public contacts: Observable<any[]>;
  public mapCoordinates: Observable<any[]>;

  getContacts() {
    return this.mainService.anyRequest({
        request: this.http.get(this.mainData.api().contacts.get).map((response: Response) => response.json().contacts),
        cacheProp: 'contacts'
      });
  }

  getMapCoordinates() {
    return this.mainService.anyRequest({
        request: this.http.get(this.mainData.api().contacts.get).map((response: Response) => response.json().mapCoordinates),
        cacheProp: 'mapCoordinates'
      });
  }

  clearCache() {
    this.contacts = null;
  }

}