import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{CompanyRoleService} from './company-role.service';
declare var $:any;
@Component({
  selector: 'app-company-role',
  templateUrl: './company-role.component.html',
  styleUrls: ['./company-role.component.css'],
    providers: [CompanyRoleService  ]
})
export class CompanyRoleComponent implements OnInit {
results:any=[];
postdata:FormGroup;
delete_role:any=[];
  tokenRecieved: boolean = false;
getallcompanyrole:Array<any>=[];
createCompanyrole:Array<any>=[];
update_role:any=[];
company_name: Array<any> = [];
updatedetails:FormGroup;
  constructor(private formBuilder: FormBuilder,private CompanyroleService: CompanyRoleService ,private localStorageService: LocalStorageService) { }


  ngOnInit() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);

    this.postdata = this.formBuilder.group({

         CompanyID: '',
         rolecode: '',
         rolename: '',
         ModifiedBy:'suresh'
       });
       this.updatedetails = this.formBuilder.group({

             CompanyID: new FormControl(),
             rolecode:new FormControl(),
             rolename: new FormControl(),
             ModifiedBy:'suresh'
           });
        this.CompanyroleService.getAllcompanyroleData().subscribe((data: Array<Object>)=> {

           this.getallcompanyrole = data;

            console.log(this.getallcompanyrole);

            });
            this.CompanyroleService.getcompany().subscribe((data: Array<Object>)=> {

                   this.company_name = data;

                    console.log(this.company_name);



                    });


  }


     removerole(post_id) {

      if (confirm("Are you sure you want to delete " + post_id + "?")) {
        this.CompanyroleService.removepost(post_id).subscribe(
           data => {

          this.delete_role = data;
          console.log(this.delete_role);
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
    this.CompanyroleService.getToken(params).subscribe(
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

    this.CompanyroleService.createrole(json_post_data).subscribe(
       data => {

        this.createCompanyrole = data;
        console.log(this.createCompanyrole);
       },
       error => {
         console.error("Error saving user!");
         return Observable.throw(error);
       }
    );

  }


  updaterole(update_id){
  localStorage.setItem('updateid',update_id);

      this.CompanyroleService.updaterole(update_id).subscribe((data: Array<Object>)=> {

         this.update_role = data;

          console.log("test");
          console.log(this.update_role);



          });

     $('#edit').modal('show');
  console.log(update_id);

  }





   saverole(CompanyID)
    {
   let updateid= localStorage.getItem('updateid');

  let json_post_data=JSON.stringify(this.updatedetails.value);
       console.log(json_post_data);

      this.CompanyroleService.saverole(json_post_data,updateid).subscribe(
         data => {

          this.CompanyroleService = data;
          console.log(this.CompanyroleService);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }



}
