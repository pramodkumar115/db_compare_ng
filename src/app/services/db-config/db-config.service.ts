import { Injectable } from '@angular/core';
import { DBConfig } from '../../models/db-config';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DbConfigService {
  constructor(private http: Http) {

  }
  getDBConfigurations(): Promise<DBConfig[]>{
    return this.http.get('resources.json')
               .toPromise()
               .then(response => response.json() as DBConfig[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
