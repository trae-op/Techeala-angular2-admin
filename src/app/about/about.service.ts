

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MainService } from '../shared/main.service';

import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class AboutService {

  constructor(private http: Http, private mainService: MainService, private mainData: MainData) {}
  
  public teamGallery: Observable<any[]>;
  public description: Observable<any[]>;

  getTeamGallery() {
    return this.mainService.anyRequest({
        request: this.http.get(this.mainData.api().about.get).map((response: Response) => response.json().gallery),
        cacheProp: 'teamGallery'
      });
  }

  getDescription() {
    return this.mainService.anyRequest({
        request: this.http.get(this.mainData.api().about.get).map((response: Response) => response.json().description),
        cacheProp: 'description'
      });
  }

  clearCache() {
    return {
      teamGallery() {
        this.teamGallery = null;
      },
      description() {
        this.description = null;
      }
    };
  }

}