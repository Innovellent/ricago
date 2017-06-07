import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{CompanyDesignationService} from './company-designation.service';
declare var $:any;
@Component({
  selector: 'app-company-designation',
  templateUrl: './company-designation.component.html',
  styleUrls: ['./company-designation.component.css'],
    providers: [CompanyDesignationService]
})
export class CompanyDesignationComponent implements OnInit {

  cresults:any=[];
  postdata:FormGroup;
  delete_designation:any=[];
    tokenRecieved: boolean = false;
  getallcompanydesignation:Array<any>=[];
  createCompanydesignation:Array<any>=[];
  update_designation:any=[];
  company_name: Array<any> = [];
  updatedetails:FormGroup;
    constructor(private formBuilder: FormBuilder,private CompanydesignationService: CompanyDesignationService ,private localStorageService: LocalStorageService) { }


    ngOnInit() {

      let params: URLSearchParams = new URLSearchParams();
      params.set('username', 'abc@aaa.com');
      params.set('Password', 'A2bcdef;');
      params.set('grant_type', 'password');
      this.getAPIAccessToken(params);

      this.postdata = this.formBuilder.group({

           CompanyID: '',
           designationcode: '',
           designationname: '',
           ModifiedBy:'suresh'
         });
         this.updatedetails = this.formBuilder.group({

               CompanyID: new FormControl(),
               designationcode:new FormControl(),
               designationname: new FormControl(),
               ModifiedBy:'suresh'
             });
          this.CompanydesignationService.getAllcompanydesignationData().subscribe((data: Array<Object>)=> {

             this.getallcompanydesignation = data;

              console.log(this.getallcompanydesignation);

              });
              this.CompanydesignationService.getcompany().subscribe((data: Array<Object>)=> {

                     this.company_name = data;

                      console.log(this.company_name);



                      });


    }


       removedesignation(post_id) {

        if (confirm("Are you sure you want to delete " + post_id + "?")) {
          this.CompanydesignationService.removepost(post_id).subscribe(
             data => {

            this.delete_designation = data;
            console.log(this.delete_designation);
           },
             error => {
               console.error("Error deleting !"+post_id);
               return Observable.throw(error);
             }
          );
        }
      }


    private getAPIAccessToken(params: URLSearchParams) {

          console.log(params);
      this.CompanydesignationService.getToken(params).subscribe(
          (tokenData) => {
            this.tokenRecieved = true;
            localStorage.setItem('access_token', JSON.stringify(tokenData));

          },
          (tokenError) => {
            this.tokenRecieved = false;
          }
      );
    }

    onSubmitPost()
    {
  let json_post_data=JSON.stringify(this.postdata.value);
       console.log(json_post_data);

      this.CompanydesignationService.createdesignation(json_post_data).subscribe(
         data => {

          this.createCompanydesignation = data;
          console.log(this.createCompanydesignation);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }


    updatedesignation(update_id){
    localStorage.setItem('updateid',update_id);

        this.CompanydesignationService.updatedesignation(update_id).subscribe((data: Array<Object>)=> {

           this.update_designation = data;

            console.log("test");
            console.log(this.update_designation);



            });

       $('#edit').modal('show');
    console.log(update_id);

    }





     savedesignation(CompanyID)
      {
     let updateid= localStorage.getItem('updateid');

    let json_post_data=JSON.stringify(this.updatedetails.value);
         console.log(json_post_data);

        this.CompanydesignationService.savedesignation(json_post_data,updateid).subscribe(
           data => {

            this.CompanydesignationService = data;
            console.log(this.CompanydesignationService);
           },
           error => {
             console.error("Error saving user!");
             return Observable.throw(error);
           }
        );

      }


}
