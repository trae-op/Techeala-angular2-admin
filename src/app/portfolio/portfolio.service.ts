

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MainService } from '../shared/main.service';

import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class PortfolioService {

  constructor(private http: Http, private mainService: MainService, private mainData: MainData) {}
  
  public portfolio: Observable<any[]>;

  getPortfolio() {
    return this.mainService.anyRequest({
        request: this.http.get(this.mainData.api().portfolio.projects.get).map((response: Response) => response.json().projects),
        cacheProp: 'portfolio'
      });
  }

  clearCache() {
    this.portfolio = null;
  }

}