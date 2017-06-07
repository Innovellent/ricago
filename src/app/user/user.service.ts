import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'
 @Injectable()
export class UserService {

  public base_url = "http://emsapi.demohind.com/";
  constructor(private http:Http) { }

 createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization',
                   'Bearer ' + JSON.parse(localStorage.getItem('access_token')).access_token);
  }

  getToken(data) {
  console.log(data);

    return this.http.post(this.base_url + "Token", data)
        .map(response => response.json());
  }

  // getAllData() {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //
  //   return this.http.get(this.base_url+"api/users/getall",
  //                         { headers: headers }
  //                         ).map((response) => {
  //     return response;
  //   });
  // }



getUser() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');

    this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/users/getall", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }


  removeuser(user_id) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
console.log(user_id);

    return this.http.delete(this.base_url + "api/users/delete/"+user_id, {headers:headers});

  }


    createUser(postdata) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     this.createAuthorizationHeader(headers);

console.log(postdata);

    return this.http.post(this.base_url + "api/users/add", postdata, {headers:headers}).map(res=> res.json());

  }

getUser_id(update_id) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
    this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/users/get/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }




    updatedetail(update_data,updateid) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     headers.append('Content-Type',
     'application/json');
    this.createAuthorizationHeader(headers);

console.log(update_data);

    return this.http.put(this.base_url + "api/users/update/"+updateid, update_data, {headers:headers}).map(res=> res.json());

  }



  getcompany() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/company/getall", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

  getDepositorycondition(){

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "/api/configs/getall/CMDP", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getgrade(update_id) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companygrade/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getlocation(update_id) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companylocation/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getdepartment(update_id) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companydepartment/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getdivision(update_id) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companydivision/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getdesignation(update_id) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companydesignation/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getwheather() {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "/api/configs/getall/KMPD", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }
  getbank(update_id) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
  this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/companybank/getall/"+update_id, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }




}
