import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";
/*import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';*/

import { UserDataService } from './user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userpost:FormGroup;
  userThingy;
  constructor(private fb: FormBuilder, private userSrvc:UserDataService) {
  	console.log(fb);
  	this.userThingy = {
	'name': ['', Validators.required],
	'email': ['', [
  		Validators.required,
 		 Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
	]],
	'post': ['', [Validators.required, Validators.minLength(10)]]
  };
  	this.userpost = fb.group(this.userThingy);
  }
  submit() {
  	console.log('submitting');
  	console.log(this.userpost.value);	
  }
  getData() {
  	console.log('getting data');

  	Observable.forkJoin([this.userSrvc.getUserData(), this.userSrvc.getUserPost()]).subscribe(results => {
  		console.log(results);
  		console.log(this.userpost);
  		let user = {
	  		name: results[0].name,
	  		email: results[0].email,
	  		post: results[1][0].body
  		};
  		this.userpost.patchValue(user);
  	});
  }
}
