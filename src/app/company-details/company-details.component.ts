import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { CompanyDetailsService } from './company-details.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {KeyPipesPipe} from '../key-pipes.pipe';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';

import { WhitelabelkeyPipe } from './whitelabelkey.pipe';

const modifiedBy: string = "11";
const currency: string = "USD";
const emailDomains: string = "yahoo.com"


@Pipe({ name: 'objngfor1' })
export class ObjNgFor1 implements PipeTransform {
TR=[];
  transform(v, args) {
    //console.log(`${v.toString().split('#')[0]}`);
    if (v!=null)
    {
      console.log(`${v.toString().split('#')[0]}`);
      this.TR.push(` ${v.toString().split('#')[1]}`);
      console.log("Test Tr");
      console.log(this.TR);
     return ` ${v.toString().split('#')[0]}`;
   }
   }
}
@Pipe({ name: 'objngfornew1' })
export class ObjNgForNew1 implements PipeTransform {
  transform(v, args) {
    //console.log(`${v.toString().split('#')[0]}`);
    if (v!=null)
    {
      console.log(`${v.toString().split('#')[1]}`);
     return ` ${v.toString().split('#')[1]}`;
   }
   }
}
@Component({
  selector: 'app-companydetails',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  providers: [CompanyDetailsService]

})
export class CompanyDetailsComponent implements OnInit {
  profile_id={};


  tg=[];
  get_white_label:Array<any>=[];
  updatedetails:FormGroup;
  profile_update={};
  profile: Array<any> = [];
  postdata:FormGroup;
  delete_post_id={};
  company_name: Array<any> = [];
    results: any = [];
    dataLoded: boolean = false;
    tokenRecieved: boolean = false;
    editCompanyData: any = {};
    updateIDForCompanyData: string = "";
  //  Add Company Form Data Initialization started
  getDepositorycondition:any = [];
  getsharelistedcondition:any = [];
  getsharesDemandcondition:any = [];
  getChoice1:any=[];
  getChoice2:any=[];

    depository: any = [];


  constructor(private formBuilder: FormBuilder,private dataServices: CompanyDetailsService ,private localStorageService: LocalStorageService) { }



  ngOnInit() {



    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);



    this.dataServices.getcompany().subscribe((data: Array<Object>)=> {

           this.company_name = data;

            console.log(this.company_name);



            });

            this.dataServices.GetWhiteLabel().subscribe((data: Array<Object>)=> {

                   this.get_white_label = data;

                    console.log(this.get_white_label);



                    });

                    this.dataServices.getDepositorycondition().subscribe((data: Array<Object>)=> {

                           this.getDepositorycondition = data;

                           console.log("this.getDepositorycondition");
                            console.log(this.getDepositorycondition);

                            console.log("this.getDepositorycondition");
                            });
                            this.dataServices.getsharelistedcondition().subscribe((data: Array<Object>)=> {

                                   this.getsharelistedcondition = data;

                                   console.log("this.getsharelistedcondition");
                                    console.log(this.getsharelistedcondition);

                                    console.log("this.getsharelistedcondition");
                                    });
                                    this.dataServices.getsharesDemandcondition().subscribe((data: Array<Object>)=> {

                                           this.getsharesDemandcondition = data;

                                           console.log("this.getsharesDemandcondition");
                                            console.log(this.getsharesDemandcondition);

                                            console.log("this.getsharesDemandcondition");
                                            });

                                            this.dataServices.getChoice1().subscribe((data: Array<Object>)=> {

                                                   this.getChoice1 = data;

                                                   console.log("this.getChoice1");
                                                    console.log(this.getChoice1);

                                                    console.log("this.getChoice1");
                                                    });
                                                    this.dataServices.getChoice2().subscribe((data: Array<Object>)=> {

                                                           this.getChoice2 = data;

                                                           console.log("this.getChoice2");
                                                            console.log(this.getChoice2);

                                                            console.log("this.getChoice2");
                                                            });



     this.postdata = this.formBuilder.group({
            CompanyName: '',
          CompanyCIN: '',
          AuthCapital: '',
          PaidupCapital: '',
          SharesListed: '',
          SharesInDemat: '',
          CompanyISIN: '',
          Depository: '',
            CompanyType: "PR",
            Currency: "INR",
            SecurityName:'',
             SecretaryName:'',
              SecretaryEmail:'',
               SecretaryPhone:'',
                  SysAdminName:'',
                     SysAdminEmail:'',
                        SysAdminPhone:'',
                        EmailDomains: "yahoo.com",
                        ModifiedBy: 11,
                        additionaltext1:'',
                        additionaltext2:'',
                        additionaldate1:'',
                        additionaldate2:'',
                        additionalchoice1:'',
                        additionalchoice2:'',


        });

    this.updatedetails = this.formBuilder.group({

          CompanyName:new FormControl(),
          //  CompanyName: new Control(this.updatedetails.CompanyName.value),
        //  CompanyName: this.updatedetails.controls.CompanyName,
          CompanyCIN: new FormControl(),
          AuthCapital: new FormControl(),
          PaidupCapital: new FormControl(),
          SharesListed: new FormControl(),
          SharesInDemat: new FormControl(),
          CompanyISIN: new FormControl(),
          Depository: new FormControl(),
            CompanyType: "PR",
            Currency: "INR",
            SecurityName:new FormControl(),
             SecretaryName:new FormControl(),
              SecretaryEmail:new FormControl(),
               SecretaryPhone:new FormControl(),
                  SysAdminName:new FormControl(),
                     SysAdminEmail:new FormControl(),
                        SysAdminPhone:new FormControl(),
                        EmailDomains: "yahoo.com",
                        ModifiedBy: 11,
                        additionaltext1:new FormControl(),
                        additionaltext2:new FormControl(),
                        additionaldate1:new FormControl(),
                        additionaldate2:new FormControl(),
                        additionalchoice1:new FormControl(),
                        additionalchoice2:new FormControl()

        });







  }


  getObjectFromArray(value: string, dataArray: any): any{
    for(let count = 0; count < dataArray.length; count++){
      if(dataArray[count].ConfigCode === value) {
        return dataArray[count];
      }
      else {
        continue
      }
    }
  }
  removeCompany(post_id) {

   if (confirm("Are you sure you want to delete " + post_id + "?")) {
     this.dataServices.removepost(post_id).subscribe(
        data => {

       this.delete_post_id = data;
       console.log(this.delete_post_id);
      },
        error => {
          console.error("Error deleting !"+post_id);
          return Observable.throw(error);
        }
     );
   }
 }

   private getAPIAccessToken(params: URLSearchParams) {
     this.dataServices.getToken(params).subscribe(
         (tokenData) => {
           this.tokenRecieved = true;
        //   this.toasterService.pop('success', 'API Token Received');
           localStorage.setItem('access_token', JSON.stringify(tokenData));
           this.getAllAPIData();
         },
         (tokenError) => {
           this.tokenRecieved = false;
          // this.toasterService.pop('error', 'API Token Not Received');
         }
     );
   }





   private getAllAPIData() {
     this.dataServices.getAllData().subscribe(
         (serviceData: Response) => {
            this.results = JSON.parse(serviceData.json()).Results;

         });
   }




  onSubmitPost()
   {
 let json_post_data=JSON.stringify(this.postdata.value);
      console.log(json_post_data);

     this.dataServices.createCompany(json_post_data).subscribe(
        data => {

         this.profile = data;
         console.log(this.profile);
        },
        error => {
          console.error("Error saving user!");
          return Observable.throw(error);
        }
     );

   }

   editCompanyDetails(update_id){
 localStorage.setItem('updateid',update_id);

     this.dataServices.getUser_id(update_id).subscribe((data: Array<Object>)=> {

        this.profile_id = data;

         console.log("profile_id");
         //console.log(this.profile_id);



         });

    $('#edit').modal('show');
 //console.log(update_id);

 }


  onUpdatePost()
   {

  let updateid= localStorage.getItem('updateid');
 //alert(updateid);
 let json_post_data=JSON.stringify(this.updatedetails.value);
      console.log(json_post_data);

     this.dataServices.updatedetail(json_post_data,updateid).subscribe(
        data => {

         this.profile_update = data;
         console.log(this.profile_update);
        },
        error => {
          console.error("Error saving user!");
          return Observable.throw(error);
        }
     );

   }
 // ngAfterViewInit(obj) {
 //   this.generateArray(obj);
 //  }

   generateArray(obj){


       // console.log(Object.keys(obj));|| obj[key] =='G'
       //console.log(Object.keys(obj).forEach((key) => {(obj[key] == null)  && delete obj[key]; return obj[key]}));
      console.log(Object.keys(obj).forEach((key) => {

        if (obj[key] === null || obj[key] ==2 )
            delete obj[key];

         }));

 this.tg.push(Object.keys(obj).map((key)=>{ return `${obj[key].toString().split('#')[1]}`}));
 //console.log("testt : " +this.tg);
   return Object.keys(obj).map((key)=>{return obj[key]});


   }

   generateArrayC(obj){
 // console.log("c");
console.log(obj);

   console.log(Object.keys(obj).forEach((key) => {(obj[key] == null)
      && delete obj[key];
       return  [`${parseInt(obj[key]).toString().split('#')[1]}`,`${parseInt(obj[key]).toString().split('#')[0]}`]}));
 //console.log(Object.keys(obj).map((key)=>{!obj[key] !== null ; return [`${obj[key].toString().split('#')[1]}`,`${obj[key].toString().split('#')[0]}`] }));

       return Object.keys(obj).map((key)=>{!obj[key] !== null ; obj[key] !== "PageID";return `${obj[key].toString().split('#')[1]}` });
 }
   generateArrayCE(obj){

       var arr = $.map(this.tg, function(el) {return el; })

       var unique = arr.filter(function(elem, index, self) {

         return index == self.indexOf(elem);


       });

       var arraytoobject={}
       unique.forEach(function(keyarr) {
         Object.keys(obj).map((key)=>{
           if(keyarr == key) {
             var keys=key;
             var value=obj[key];
             arraytoobject[keys]=value;
             //console.log(arraytoobject[keys]+"="+value);
             console.log(keys+"="+value);

             return arraytoobject;
           }
         });

       });

   console.log(arraytoobject);

       console.log(Object.keys(arraytoobject).map((key)=>{  var keys=key;return [arraytoobject[key],keys]}));
         // return [keys,vals];

   return Object.keys(arraytoobject).map((key)=>{
     var keys=key;
     var value=arraytoobject[key];
     return [keys,arraytoobject[key]]});

   }



   generateArrayTR(obj){
     //console.log(typeof this.tg);

     var arr = $.map(this.tg, function(el) {return el; })

     // console.log(arr);
     // console.log(typeof arr);
     var unique = arr.filter(function(elem, index, self) {

       return index == self.indexOf(elem);


     });

     var arraytoobject={}
     unique.forEach(function(keyarr) {
       Object.keys(obj).map((key)=>{
         if(keyarr == key) {
           var keys=key;
           var value=obj[key];
           arraytoobject[keys]=value;
           //console.log(arraytoobject[keys]+"="+value);
           console.log(keys+"="+value);

           return arraytoobject;
         }
       });

     });
     // console.log("arraytoobject");
     // console.log(arraytoobject);

     // console.log(arr_obj);
     //
     //
     // console.log(typeof arr_obj);

     // console.log(Object.keys(arraytoobject).forEach((key) => {
     //
     //   if (arraytoobject[key] === null || key == "CompanyID" || key == "CompanyISIN" || key =="CompanyType"|| key =="Currency"|| key =="EmailDomains"
     //   || key =="SecretaryPhone" || key =="SharesInDemat" || key =="SharesListed"  )
     //   delete arraytoobject[key];
     //
     // }));

     //console.log("testtt");

     return Object.keys(arraytoobject).map((key)=>{return arraytoobject[key]});


   }





}
