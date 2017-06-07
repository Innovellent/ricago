import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'
@Injectable()
export class ManageGranteeService {


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


     getGrants() {

     let headers = new Headers();
       headers.append('Content-Type',
          'application/json');

         this.createAuthorizationHeader(headers);
         return this.http.get(this.base_url + "api/Grants/getall", {headers:headers})
         .map((res:Response) => JSON.parse(res.json()));
       }
       getschemeid(getschemeid) {

       let headers = new Headers();
         headers.append('Content-Type',
            'application/json');
           this.createAuthorizationHeader(headers);
           return this.http.get(this.base_url + "api/scheme/get/"+getschemeid, {headers:headers})
           .map((res:Response) => JSON.parse(res.json()));
         }

         getcompany() {

       let headers = new Headers();
         headers.append('Content-Type',
            'application/json');
       this.createAuthorizationHeader(headers);
           return this.http.get(this.base_url + "api/company/getall", {headers:headers})
           .map((res:Response) => JSON.parse(res.json()));
         }


         getscheme(update_id) {

       let headers = new Headers();
         headers.append('Content-Type',
            'application/json');
       this.createAuthorizationHeader(headers);
           return this.http.get(this.base_url + "api/scheme/getall/"+update_id, {headers:headers})
           .map((res:Response) => JSON.parse(res.json()));
         }
         getpaln(update_id) {

       let headers = new Headers();
         headers.append('Content-Type',
            'application/json');
       this.createAuthorizationHeader(headers);
           return this.http.get(this.base_url + "api/schemedossier/getall/"+update_id, {headers:headers})
           .map((res:Response) => JSON.parse(res.json()));
         }
         creategrantee(postdata) {

       let headers = new Headers();
       headers.append('Content-Type',
          'application/json; charset=utf-8');
          this.createAuthorizationHeader(headers);

       console.log(postdata);

         return this.http.post(this.base_url + "api/Grants/add", postdata, {headers:headers}).map(res=> res.json());

       }

       editplan(putdata,updateid) {

     let headers = new Headers();
     headers.append('Content-Type',
        'application/json; charset=utf-8');
        this.createAuthorizationHeader(headers);

     console.log(putdata);

       return this.http.put(this.base_url + "api/Grants/update/"+updateid, putdata, {headers:headers}).map(res=> res.json());

     }


     getschemewizard(getschemewizard) {

     let headers = new Headers();
       headers.append('Content-Type',
          'application/json');
         this.createAuthorizationHeader(headers);
         return this.http.get(this.base_url + "api/Grants/get/"+getschemewizard, {headers:headers})
         .map((res:Response) => JSON.parse(res.json()));
       }

       getschemewizard_table_xml(getschemewizard_table_xml) {

       let headers = new Headers();
         headers.append('Content-Type',
            'application/json');
           this.createAuthorizationHeader(headers);
           return this.http.get(this.base_url + "api/Grants/getvestinggrade/"+getschemewizard_table_xml, {headers:headers})
           .map((res:Response) => JSON.parse(res.json()));
         }


}
