import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'
 @Injectable()
export class CompanyDetailsService {

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

    saveCompanyData(data) {
      return this.http.post(this.base_url + "api/company/add", data)
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

    getAllCompanies() {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url+"api/configs/getall/CMTP",
                           { headers: headers }
      ).map((response) => {
        return response;
      });
    }

    // getAllDepositories() {
    //   let headers = new Headers();
    //   this.createAuthorizationHeader(headers);
    //   return this.http.get(this.base_url+"api/configs/getall/CMDP",
    //                        { headers: headers }
    //   ).map((response) => {
    //     return response;
    //   });
    // }

    getSingleData(id: string) {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url+"api/company/get/" + id,
                           { headers: headers }
      ).map((response) => {
        return response;
      });
    }

    updateSingleData(id: string, data) {
      return this.http.put(this.base_url + "api/company/update/" + id, data)
          .map(response => response.json());
    }




    getcompany() {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
  this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/company/getall", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    GetWhiteLabel() {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
  this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "api/pagecontrol/getall/2",{headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }


     removepost(post_id) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
  this.createAuthorizationHeader(headers);
  console.log(post_id);

      return this.http.delete(this.base_url + "api/company/delete/"+post_id, {headers:headers});

    }
    createCompany(postdata) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json; charset=utf-8');
       this.createAuthorizationHeader(headers);

  console.log(postdata);

      return this.http.post(this.base_url + "api/company/add", postdata, {headers:headers}).map(res=> res.json());

    }

    getUser_id(update_id) {

  let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
      this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/company/get/"+update_id, {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }


   updatedetail(update_data,updateid) {
    //  alert("sd");
  let headers = new Headers();
    headers.append('Content-Type',
       'application/json; charset=utf-8');
       headers.append('Content-Type',
       'application/json');
      this.createAuthorizationHeader(headers);

  console.log(update_data);

      return this.http.put(this.base_url + "api/company/update/"+updateid, update_data, {headers:headers}).map(res=> res.json());

    }

    getDepositorycondition(){

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/configs/getall/CMDP", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    getsharelistedcondition(){

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/configs/getall/SHLS", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    getsharesDemandcondition(){

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/configs/getall/SHDM", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    getChoice1(){

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/configs/getall/CAC1", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }
    getChoice2(){

    let headers = new Headers();
    headers.append('Content-Type',
       'application/json');
    this.createAuthorizationHeader(headers);
      return this.http.get(this.base_url + "/api/configs/getall/CAC2", {headers:headers})
      .map((res:Response) => JSON.parse(res.json()));
    }


}
