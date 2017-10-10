

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';


import { MainData } from './mainData';

// for adding other services 
@Injectable()

export class MainService {

  constructor(private http: Http) {}

  private baseUrl = 'assets/data.json';
  
  public allData: Observable<any[]>;

  getData() {
    if (!this.allData) {
      this.allData = this.http.get(this.baseUrl)
        .map((response: Response) => response.json())
        .do(data => console.info('===> successful <===\n', data))
        // Caching of data
        .publishReplay(1).refCount()
        .catch(this.handleError);
    } else {
      console.info('if exist data');
    }
      return this.allData;
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.warn('===> Bad request <===', error);
    return Observable.throw(error.json().error || 'Server error');
  }
}