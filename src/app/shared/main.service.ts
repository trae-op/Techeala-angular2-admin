

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';

import { MainData } from '../shared/mainData';

// for adding other services 
@Injectable()

export class MainService {

  closeResult: string;

  constructor(
    private http: Http, 
    private mainData: MainData
  ) {}
  
  public menuData: Observable<any[]>;

  getMainMenu() {
    return this.anyRequest({
        request: this.http.get(this.mainData.api().mainMenu.get).map((response: Response) => response.json()),
        cacheProp: 'menuData'
      });
  }

  anyRequest(settings) {
    if (!this[settings.cacheProp]) {
      this[settings.cacheProp] = settings.request.do(data => console.info('===> successful <===\n', data))
        // Caching of data
        .publishReplay(1).refCount()
        .catch(this.handleError);
    } else {
      console.info(this.mainData.cacheMessage(settings.cacheProp));
    }

    return this[settings.cacheProp];
  }  

  clearCache() {
    this.menuData = null;
  }


  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.warn(this.mainData.badRequest, error);
    return Observable.throw(error.json().error || this.mainData.serverError);
  }
}

