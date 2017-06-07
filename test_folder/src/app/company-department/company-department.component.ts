import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{CompanyDepartmentService} from './company-department.service';
declare var $:any;
@Component({
  selector: 'app-company-department',
  templateUrl: './company-department.component.html',
  styleUrls: ['./company-department.component.css'],
    providers: [CompanyDepartmentService  ]
})
export class CompanyDepartmentComponent implements OnInit {
results:any=[];
postdata:FormGroup;
delete_department:any=[];
  tokenRecieved: boolean = false;
getallcompanydepartment:Array<any>=[];
createCompanyDepartment:Array<any>=[];
update_department:any=[];
company_name: Array<any> = [];
updatedetails:FormGroup;
  constructor(private formBuilder: FormBuilder,private CompanyDepartmentService: CompanyDepartmentService ,private localStorageService: LocalStorageService) { }


  ngOnInit() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);

    this.postdata = this.formBuilder.group({

         CompanyID: '',
         departmentcode: '',
         departmentname: '',
         ModifiedBy:'suresh'
       });
       this.updatedetails = this.formBuilder.group({

             CompanyID: new FormControl(),
             departmentcode:new FormControl(),
             departmentname: new FormControl(),
             ModifiedBy:'suresh'
           });
        this.CompanyDepartmentService.getAllcompanydepartmentData().subscribe((data: Array<Object>)=> {

           this.getallcompanydepartment = data;

            console.log(this.getallcompanydepartment);

            });
            this.CompanyDepartmentService.getcompany().subscribe((data: Array<Object>)=> {

                   this.company_name = data;

                    console.log(this.company_name);



                    });


  }


     removedepartment(post_id) {

      if (confirm("Are you sure you want to delete " + post_id + "?")) {
        this.CompanyDepartmentService.removepost(post_id).subscribe(
           data => {

          this.delete_department = data;
          console.log(this.delete_department);
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
    this.CompanyDepartmentService.getToken(params).subscribe(
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

    this.CompanyDepartmentService.createdepartment(json_post_data).subscribe(
       data => {

        this.createCompanyDepartment = data;
        console.log(this.createCompanyDepartment);
       },
       error => {
         console.error("Error saving user!");
         return Observable.throw(error);
       }
    );

  }


  updatedepartment(update_id){
  localStorage.setItem('updateid',update_id);

      this.CompanyDepartmentService.updatedepartment(update_id).subscribe((data: Array<Object>)=> {

         this.update_department = data;

          console.log("test");
          console.log(this.update_department);



          });

     $('#edit').modal('show');
  console.log(update_id);

  }





   savedepartment(CompanyID)
    {
   let updateid= localStorage.getItem('updateid');

  let json_post_data=JSON.stringify(this.updatedetails.value);
       console.log(json_post_data);

      this.CompanyDepartmentService.savedepartment(json_post_data,updateid).subscribe(
         data => {

          this.CompanyDepartmentService = data;
          console.log(this.CompanyDepartmentService);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }



}
