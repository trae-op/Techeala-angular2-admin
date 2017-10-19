

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MainService } from '../shared/main.service';

import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class TechnologiesService {

  constructor(private http: Http, private mainService: MainService, private mainData: MainData) {}
  
  public technologies: Observable<any[]>;

  getTechnologies() {
    return this.mainService.anyRequest({
      request: this.http.get(this.mainData.api().technologies.get).map((response: Response) => response.json().technologies),
      cacheProp: 'technologies'
    });
  }

  clearCache() {
    this.technologies = null;
  }

}