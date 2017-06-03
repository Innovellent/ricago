import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{CompanyDivisionService} from './company-division.service';
declare var $:any;
@Component({
  selector: 'app-company-division',
  templateUrl: './company-division.component.html',
  styleUrls: ['./company-division.component.css'],
    providers: [CompanyDivisionService  ]
})
export class CompanyDivisionComponent implements OnInit {
results:any=[];
postdata:FormGroup;
delete_division:any=[];
  tokenRecieved: boolean = false;
getallcompanydivision:Array<any>=[];
createCompanydivision:Array<any>=[];
update_division:any=[];
company_name: Array<any> = [];
updatedetails:FormGroup;
  constructor(private formBuilder: FormBuilder,private CompanydivisionService: CompanyDivisionService ,private localStorageService: LocalStorageService) { }


  ngOnInit() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);

    this.postdata = this.formBuilder.group({

         CompanyID: '',
         divisioncode: '',
         divisionname: '',
         ModifiedBy:'suresh'
       });
       this.updatedetails = this.formBuilder.group({

             CompanyID: new FormControl(),
             divisioncode:new FormControl(),
             divisionname: new FormControl(),
             ModifiedBy:'suresh'
           });
        this.CompanydivisionService.getAllcompanydivisionData().subscribe((data: Array<Object>)=> {

           this.getallcompanydivision = data;

            console.log(this.getallcompanydivision);

            });
            this.CompanydivisionService.getcompany().subscribe((data: Array<Object>)=> {

                   this.company_name = data;

                    console.log(this.company_name);



                    });


  }


     removedivision(post_id) {

      if (confirm("Are you sure you want to delete " + post_id + "?")) {
        this.CompanydivisionService.removepost(post_id).subscribe(
           data => {

          this.delete_division = data;
          console.log(this.delete_division);
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
    this.CompanydivisionService.getToken(params).subscribe(
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

    this.CompanydivisionService.createdivision(json_post_data).subscribe(
       data => {

        this.createCompanydivision = data;
        console.log(this.createCompanydivision);
       },
       error => {
         console.error("Error saving user!");
         return Observable.throw(error);
       }
    );

  }


  updatedivision(update_id){
  localStorage.setItem('updateid',update_id);

      this.CompanydivisionService.updatedivision(update_id).subscribe((data: Array<Object>)=> {

         this.update_division = data;

          console.log("test");
          console.log(this.update_division);



          });

     $('#edit').modal('show');
  console.log(update_id);

  }





   savedivision(CompanyID)
    {
   let updateid= localStorage.getItem('updateid');

  let json_post_data=JSON.stringify(this.updatedetails.value);
       console.log(json_post_data);

      this.CompanydivisionService.savedivision(json_post_data,updateid).subscribe(
         data => {

          this.CompanydivisionService = data;
          console.log(this.CompanydivisionService);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }



}
