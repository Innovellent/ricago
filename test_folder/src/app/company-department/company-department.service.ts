import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'
@Injectable()
export class CompanyDepartmentService {

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


  getAllcompanydepartmentData() {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');

      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/companydepartment/getall", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    removepost(post_id) {

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
    console.log(post_id);

      return this.http.delete(this.base_url + "api/companydepartment/delete/"+post_id, {headers:headers});

    }


    createdepartment(postdata) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     this.createAuthorizationHeader(headers);

console.log(postdata);

    return this.http.post(this.base_url + "api/companydepartment/add", postdata, {headers:headers}).map(res=> res.json());

  }
  getcompany() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/company/getall", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }


  updatedepartment(update_id) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/companydepartment/get/"+update_id, {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }

    savedepartment(update_data,updateid) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     headers.append('Content-Type',
     'application/json');
    this.createAuthorizationHeader(headers);

console.log(update_data);

    return this.http.put(this.base_url + "api/companydepartment/update/"+updateid, update_data, {headers:headers}).map(res=> res.json());

  }


}
