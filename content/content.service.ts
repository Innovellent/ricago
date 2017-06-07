import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'
 @Injectable()
export class ContentService {

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

  getAllData() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.base_url+"api/company/getall",
                          { headers: headers }
                          ).map((response) => {
      return response;
    });
  }



getUser() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
    
    this.createAuthorizationHeader(headers);
    return this.http.get(`http://emsapi.demohind.com/api/companygrade/getall
`, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }


  removepost(post_id) {
   
let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
console.log(post_id);
      
    return this.http.delete('http://emsapi.demohind.com/api/companygrade/delete/'+post_id, {headers:headers});

  }


    createUser(postdata) {
   
let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     this.createAuthorizationHeader(headers);

console.log(postdata);
      
    return this.http.post('http://emsapi.demohind.com/api/companygrade/add', postdata, {headers:headers}).map(res=> res.json());

  }

getUser_id(update_id) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
    this.createAuthorizationHeader(headers);
    return this.http.get(`http://emsapi.demohind.com/api/companygrade/get/`+update_id, {headers:headers})
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
      
    return this.http.put('http://emsapi.demohind.com/api/companygrade/update/'+updateid, update_data, {headers:headers}).map(res=> res.json());

  }



  getcompany() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(`http://emsapi.demohind.com/api/company/getall
`, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

}