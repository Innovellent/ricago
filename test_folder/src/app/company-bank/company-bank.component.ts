import { Component, OnInit } from '@angular/core';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import{CompanyBankService} from './company-bank.service';
declare var $:any;
@Component({
  selector: 'app-company-bank',
  templateUrl: './company-bank.component.html',
  styleUrls: ['./company-bank.component.css'],
    providers: [CompanyBankService  ]
})
export class CompanyBankComponent implements OnInit {
results:any=[];
postdata:FormGroup;
delete_bank:any=[];
  tokenRecieved: boolean = false;
getallcompanybank:Array<any>=[];
createCompanybank:Array<any>=[];
update_bank:any=[];
company_name: Array<any> = [];
updatedetails:FormGroup;
  constructor(private formBuilder: FormBuilder,private CompanybankService: CompanyBankService ,private localStorageService: LocalStorageService) { }


  ngOnInit() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);

    this.postdata = this.formBuilder.group({

         CompanyID: '',
         bankcode: '',
         bankname: '',
         ModifiedBy:'suresh'
       });
       this.updatedetails = this.formBuilder.group({

             CompanyID: new FormControl(),
             bankcode:new FormControl(),
             bankname: new FormControl(),
             ModifiedBy:'suresh'
           });
        this.CompanybankService.getAllcompanybankData().subscribe((data: Array<Object>)=> {

           this.getallcompanybank = data;

            console.log(this.getallcompanybank);

            });
            this.CompanybankService.getcompany().subscribe((data: Array<Object>)=> {

                   this.company_name = data;

                    console.log(this.company_name);



                    });


  }


     removebank(post_id) {

      if (confirm("Are you sure you want to delete " + post_id + "?")) {
        this.CompanybankService.removepost(post_id).subscribe(
           data => {

          this.delete_bank = data;
          console.log(this.delete_bank);
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
    this.CompanybankService.getToken(params).subscribe(
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

    this.CompanybankService.createbank(json_post_data).subscribe(
       data => {

        this.createCompanybank = data;
        console.log(this.createCompanybank);
       },
       error => {
         console.error("Error saving user!");
         return Observable.throw(error);
       }
    );

  }


  updatebank(update_id){
  localStorage.setItem('updateid',update_id);

      this.CompanybankService.updatebank(update_id).subscribe((data: Array<Object>)=> {

         this.update_bank = data;

          console.log("test");
          console.log(this.update_bank);



          });

     $('#edit').modal('show');
  console.log(update_id);

  }





   savebank(CompanyID)
    {
   let updateid= localStorage.getItem('updateid');

  let json_post_data=JSON.stringify(this.updatedetails.value);
       console.log(json_post_data);

      this.CompanybankService.savebank(json_post_data,updateid).subscribe(
         data => {

          this.CompanybankService = data;
          console.log(this.CompanybankService);
         },
         error => {
           console.error("Error saving user!");
           return Observable.throw(error);
         }
      );

    }



}
