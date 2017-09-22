import { Injectable } from '@angular/core';
import { DBConfig } from '../../models/db-config';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DbCompareService {

  constructor(private http: Http) { }

  getDBCompareResult(dbDetails): Promise<any>{
    const url = "http://localhost:8081/DBCompare/rest/dbcompare/difference";
    const headers = new Headers({'Access-Control-Allow-Headers':'X-Requested-With,content-type',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                    'Access-Control-Allow-Credentials':'true',
                    'Access-Control-Allow-Origin':'http://localhost:8081'});
    return this.http.post(url, JSON.stringify(dbDetails), {headers: headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
