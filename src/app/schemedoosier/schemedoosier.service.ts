import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'

@Injectable()
export class SchemedoosierService {

  public base_url = "http://emsapi.demohind.com/";
  constructor(private http: Http) {


  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization',
                   'Bearer ' + JSON.parse(localStorage.getItem('access_token')).access_token);
  }

  getToken(data) {
    return this.http.post(this.base_url + "Token", data)
        .map(response => response.json());
  }
  getAllScheme() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url+"/api/scheme/getall",
                         { headers: headers }
    ).map((response) => {
      return response;
    });
  }


  getcompany() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/company/getall", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

  getschemedetails() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "/api/configs/getall/SCTP", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

  getschememode() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "/api/configs/getall/SCMD", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

  getschemetimezone() {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "/api/configs/getall/TMZN", {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }

getschemevestingtype(){

let headers = new Headers();
headers.append('Content-Type',
   'application/json');
this.createAuthorizationHeader(headers);
  return this.http.get(this.base_url + "/api/configs/getall/VSTP", {headers:headers})
  .map((res:Response) => JSON.parse(res.json()));
}
getschemenograde(){

let headers = new Headers();
headers.append('Content-Type',
   'application/json');
this.createAuthorizationHeader(headers);
  return this.http.get(this.base_url + "/api/configs/getall/NOGD", {headers:headers})
  .map((res:Response) => JSON.parse(res.json()));
}
getschemepaymentmode(){

let headers = new Headers();
headers.append('Content-Type',
   'application/json');
this.createAuthorizationHeader(headers);
  return this.http.get(this.base_url + "/api/configs/getall/SDPM", {headers:headers})
  .map((res:Response) => JSON.parse(res.json()));
}
getschemeadditioncondition(){

let headers = new Headers();
headers.append('Content-Type',
   'application/json');
this.createAuthorizationHeader(headers);
  return this.http.get(this.base_url + "/api/configs/getall/SDAC", {headers:headers})
  .map((res:Response) => JSON.parse(res.json()));
}

//   getschemedetails() {
//
// let headers = new Headers();
//   headers.append('Content-Type',
//      'application/json');
// this.createAuthorizationHeader(headers);
//     return this.http.get(this.base_url + "/api/configs/getall/SCTP", {headers:headers})
//     .map((response) => {  return response;} );
//   }



  createScheme(postdata) {

let headers = new Headers();
headers.append('Content-Type',
   'application/json; charset=utf-8');
   this.createAuthorizationHeader(headers);

console.log(postdata);

  return this.http.post(this.base_url + "/api/scheme/add", postdata, {headers:headers}).map(res=> res.json());

}

getschemeid(getschemeid) {

let headers = new Headers();
  headers.append('Content-Type',
     'application/json');
    this.createAuthorizationHeader(headers);
    return this.http.get(this.base_url + "api/scheme/get/"+getschemeid, {headers:headers})
    .map((res:Response) => JSON.parse(res.json()));
  }




    createplan(postplandata) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     this.createAuthorizationHeader(headers);

  console.log(postplandata);

    return this.http.post(this.base_url + "/api/schemedossier/add", postplandata, {headers:headers}).map(res=> res.json());

  }

  getschemewizard(getschemewizard) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/schemedossier/get/"+getschemewizard, {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }

    editplan(putdata,SchemeDossierID) {

  let headers = new Headers();
  headers.append('Content-Type',
     'application/json; charset=utf-8');
     this.createAuthorizationHeader(headers);

  console.log(putdata);

    return this.http.put(this.base_url + "/api/schemedossier/update/"+SchemeDossierID, putdata, {headers:headers}).map(res=> res.json());

  }
  getschemewizard_table_xml(getschemewizard_table_xml) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/schemedossier/getvestinggrade/"+getschemewizard_table_xml, {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }




}
