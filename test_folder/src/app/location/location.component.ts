import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{LocationService} from './location.service';
declare var $:any;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
    providers: [LocationService  ]
})
export class LocationComponent implements OnInit {

  results:any=[];
  postdata:FormGroup;
  delete_location:any=[];
    tokenRecieved: boolean = false;
  getallcompanylocation:Array<any>=[];
  createCompanylocation:Array<any>=[];
  update_location:any=[];
  company_name: Array<any> = [];
  updatedetails:FormGroup;
    constructor(private formBuilder: FormBuilder,private CompanylocationService: LocationService ,private localStorageService: LocalStorageService) { }


    ngOnInit() {

      let params: URLSearchParams = new URLSearchParams();
      params.set('username', 'abc@aaa.com');
      params.set('Password', 'A2bcdef;');
      params.set('grant_type', 'password');
      this.getAPIAccessToken(params);

      this.postdata = this.formBuilder.group({

           CompanyID: '',
           locationcode: '',
           locationname: '',
           ModifiedBy:'suresh'
         });
         this.updatedetails = this.formBuilder.group({

               CompanyID: new FormControl(),
               locationcode:new FormControl(),
               locationname: new FormControl(),
               ModifiedBy:'suresh'
             });
          this.CompanylocationService.getAllcompanylocationData().subscribe((data: Array<Object>)=> {

             this.getallcompanylocation = data;

              console.log(this.getallcompanylocation);

              });
              this.CompanylocationService.getcompany().subscribe((data: Array<Object>)=> {

                     this.company_name = data;

                      console.log(this.company_name);



                      });


    }


       removelocation(post_id) {

        if (confirm("Are you sure you want to delete " + post_id + "?")) {
          this.CompanylocationService.removepost(post_id).subscribe(
             data => {

            this.delete_location = data;
            console.log(this.delete_location);
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
      this.CompanylocationService.getToken(params).subscribe(
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

      this.CompanylocationService.createlocation(json_post_data).subscribe(
         data => {

          this.createCompanylocation = data;
          console.log(this.createCompanylocation);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }


    updatelocation(update_id){
    localStorage.setItem('updateid',update_id);

        this.CompanylocationService.updatelocation(update_id).subscribe((data: Array<Object>)=> {

           this.update_location = data;

            console.log("test");
            console.log(this.update_location);



            });

       $('#edit').modal('show');
    console.log(update_id);

    }





     savelocation(CompanyID)
      {
     let updateid= localStorage.getItem('updateid');

    let json_post_data=JSON.stringify(this.updatedetails.value);
         console.log(json_post_data);

        this.CompanylocationService.savelocation(json_post_data,updateid).subscribe(
           data => {

            this.CompanylocationService = data;
            console.log(this.CompanylocationService);
           },
           error => {
             console.error("Error saving user!");
             return Observable.throw(error);
           }
        );

      }


}
