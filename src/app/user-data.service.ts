import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class UserDataService {

  constructor(public http: Http) { }

  getUserData():Observable<any> {
  	let url = 'http://jsonplaceholder.typicode.com/users/1';
  	return this.http.get(url).map(res => res.json());
  }

  getUserPost():Observable<any> {
  	let url = 'http://jsonplaceholder.typicode.com/posts?userId=1';
  	return this.http.get(url).map(res => res.json());
  }

  /*getAllData() {
  	let obs = [].push(getUserData());
  	obs.push(.push(getUserPost()));
  	Observable.forkJoin(obs).subscribe(results => {
  		console.log(results);
  	})
  }*/
}
