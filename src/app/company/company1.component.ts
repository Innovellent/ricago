import { Component, OnInit, ViewChild , Pipe, PipeTransform } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { CompanyService } from './company.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {KeyPipesPipe} from '../key-pipes.pipe';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ToasterService } from 'angular2-toaster';

import { WhitelabelkeyPipe } from './whitelabelkey.pipe';

const modifiedBy: string = "11";
const currency: string = "USD";
const emailDomains: string = "yahoo.com"


@Pipe({ name: 'objngfor' })
export class ObjNgFor implements PipeTransform {
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
@Pipe({ name: 'objngfornew' })
export class ObjNgForNew implements PipeTransform {
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
  selector: 'app-company',
  templateUrl: './company1.component.html',

  styleUrls: ['./company.component.css'],
  providers: [CompanyService,ToasterService],




})

export class CompanyComponent implements OnInit {
profile_id={};
todos:Array<any>=[{
      Daario: "Naharis",
      Victarion: "Greyjoy",
      Quentyn: "Ball"
  }];
 //  demo = {
 //   'key1': 'ANGULAR 2',
 //   'key2': 'Pardeep',
 //   'key3': 'Jain',
 // }
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
  addCompanyName: string = "";
  addCompanyCIN: string = "";
  addCompanyType: any = {};
  addAuthorizedSharedCapital: string = "";
  addPaidUpSharedCapital : string = "";
  addCompanyISIN: string = "";
  addSecurityName: string = "";
  addCompanySecretaryName: string = "";
  addCompanySecretaryEmail: string = "";
  addCompanySecretaryNumber: string = "";
  addAdminName: string = "";
  addAdminEmail: string = "";
  addAdminNumber: string = "";
  addDepository: any = {};
  addShareListing: any = {};
  addDematShareListing: any = {};
  addStockExchange: string = "";

//  Add Company Form Data Initialization Finished

//  Add Company Form Data Initialization started

  editCompanyName: string = "";
  editCompanyCIN: string = "";
  editCompanyType: any = {};
  editAuthorizedSharedCapital: string = "";
  editPaidUpSharedCapital : string = "";
  editCompanyISIN: string = "";
  editSecurityName: string = "";
  editCompanySecretaryName: string = "";
  editCompanySecretaryEmail: string = "";
  editCompanySecretaryNumber: string = "";
  editAdminName: string = "";
  editAdminEmail: string = "";
  editAdminNumber: string = "";
  editDepository: any = {};
  editShareListing: any = {};
  editDematShareListing: any = {};
  editStockExchange: string = "";

//  Add Company Form Data Initialization Finished

//  Drop Downs Initialization started
  companyType: any = [];

  depository: any = [];

  shareListings: any = [
    {
      ConfigValue: "Select Whether Shares Are Listed",
      ConfigCode: ""
    },
    {
      ConfigValue: "YES",
      ConfigCode: "Y"
    },
    {
      ConfigValue: "NO",
      ConfigCode: "N"
    }
  ];

  shareListingsInDemat: any = [
    {
      ConfigValue: "Shares in Demat Account",
      ConfigCode: ""
    },
    {
      ConfigValue: "YES",
      ConfigCode: "Y"
    },
    {
      ConfigValue: "NO",
      ConfigCode: "N"
    }
  ];

  stockExchanges: any = ["Select Stock Exchange on Listed shares", "NSE", "BSE"];

//  Drop Downs Finished

  @ViewChild('addModal') public addModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;

  constructor(private formBuilder: FormBuilder,private dataServices: CompanyService, private toasterService: ToasterService) {

    this.updateIDForCompanyData = "";
    this.toasterService = toasterService;
    this.addShareListing = this.shareListings[0];
    this.addStockExchange = this.stockExchanges[0];
    this.addDematShareListing = this.shareListingsInDemat[0];

  }

  public showAddModal(): void {
    this.addModal.show();
  }

  public hideAddModal(): void {
    this.addModal.hide();
  }

  public showEditModal(): void {
    this.editModal.show();
  }

  public hideEditModal(): void {
    this.editModal.hide();
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



  addCompanyForm() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('CompanyType', this.addCompanyType.ConfigValue);
    params.set('CompanyName', this.addCompanyName);
    params.set('CompanyCIN', this.addCompanyCIN);

    params.set('Currency', currency);
    params.set('AuthCapital', this.addAuthorizedSharedCapital);
    params.set('PaidupCapital', this.addPaidUpSharedCapital);

    params.set('SharesListed', this.addShareListing.ConfigValue);
    params.set('SecretaryName', this.addCompanySecretaryName);
    params.set('SecretaryEmail', this.addCompanySecretaryEmail);

    params.set('SysAdminEmail', this.addAdminEmail);
    params.set('EmailDomains', emailDomains);
    params.set('ModifiedBy', modifiedBy);

    params.set('SysAdminName', this.addAdminName);
    params.set('SecurityName', this.addSecurityName);
    params.set('SysAdminPhone', this.addAdminNumber);

    params.set('SharesInDemat', this.addDematShareListing.ConfigValue);
    params.set('CompanyISIN', this.addCompanyISIN);
    params.set('SecretaryPhone', this.addCompanySecretaryNumber);

    params.set('Depository', this.addDepository.ConfigValue);

    this.dataServices.saveCompanyData(params).subscribe(
        (saveCompanyData) => {
          this.toasterService.pop('success', 'Company Record Created Successfully');
          this.getAllAPIData();
          this.addModal.hide();
        },
        (saveCompanyError) => {
          this.toasterService.pop('error', 'Company Record Creation Failed');
          this.addModal.hide();
        }
    );
  }

  resetAddCompanyForm() {
    this.addCompanyName = "";
    this.addCompanyCIN = "";
    this.addCompanyType = this.companyType[0];
    this.addAuthorizedSharedCapital = "";
    this.addPaidUpSharedCapital = "";
    this.addCompanyISIN = "";
    this.addSecurityName = "";
    this.addCompanySecretaryName = "";
    this.addCompanySecretaryEmail = "";
    this.addCompanySecretaryNumber = "";
    this.addAdminName = "";
    this.addAdminEmail = "";
    this.addAdminNumber = "";
    this.addDepository = this.depository[0];
    this.addShareListing = this.shareListings[0];
    this.addStockExchange = this.stockExchanges[0];
    this.addDematShareListing = this.shareListingsInDemat[0];
    this.addStockExchange = "";
  }

  resetEditCompanyForm() {
    this.editCompanyName = "";
    this.editCompanyCIN = "";
    this.editCompanyType = this.companyType[0];
    this.editAuthorizedSharedCapital = "";
    this.editPaidUpSharedCapital = "";
    this.editCompanyISIN = "";
    this.editSecurityName = "";
    this.editCompanySecretaryName = "";
    this.editCompanySecretaryEmail = "";
    this.editCompanySecretaryNumber = "";
    this.editAdminName = "";
    this.editAdminEmail = "";
    this.editAdminNumber = "";
    this.editDepository = this.depository[0];
    this.editShareListing = this.shareListings[0];
    this.editStockExchange = this.stockExchanges[0];
    this.editDematShareListing = this.shareListingsInDemat[0];
    this.editStockExchange = "";
  }



  UpdateCompanyData(){
    if(this.updateIDForCompanyData && this.updateIDForCompanyData !== ""){
      let params: URLSearchParams = new URLSearchParams();
      params.set('CompanyType', this.editCompanyType.ConfigValue);
      params.set('CompanyName', this.editCompanyName);
      params.set('CompanyCIN', this.editCompanyCIN);

      params.set('Currency', currency);
      params.set('AuthCapital', this.editAuthorizedSharedCapital);
      params.set('PaidupCapital', this.editPaidUpSharedCapital);

      params.set('SharesListed', this.editShareListing.ConfigValue);
      params.set('SecretaryName', this.editCompanySecretaryName);
      params.set('SecretaryEmail', this.editCompanySecretaryEmail);

      params.set('SysAdminEmail', this.editAdminEmail);
      params.set('EmailDomains', emailDomains);
      params.set('ModifiedBy', modifiedBy);

      params.set('SysAdminName', this.editAdminName);
      params.set('SecurityName', this.editSecurityName);
      params.set('SysAdminPhone', this.editAdminNumber);

      params.set('SharesInDemat', this.editDematShareListing.ConfigValue);
      params.set('CompanyISIN', this.editCompanyISIN);
      params.set('SecretaryPhone', this.editCompanySecretaryNumber);

      params.set('Depository', this.editDepository.ConfigValue);

      this.dataServices.updateSingleData(this.updateIDForCompanyData, params).subscribe(
          (updateCompanyData) => {
            this.toasterService.pop('success', 'Company Record Updated Successfully');
            this.getAllAPIData();
            this.editModal.hide();
          },
          (UpdateCompanyError) => {
            this.toasterService.pop('error', 'Company Record Updation Failed');
            this.editModal.hide();
          }
      );

    }
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

  ngOnInit() {

    var pagecontroldata = [];
    var pagecontroldataedit = [];
    var pagecontroldataeditapi = [];
    var pagecontroldataeditlabel = [];

    this.updateIDForCompanyData = "";
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);

     $(function () {

    $('#Grant').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true
    });
  });


    $('input[type=text]').focus(function () {
    let placeholder = $(this).attr('placeholder');
    if(placeholder != undefined){
      $(this).parent().prepend('<span class="input-placeholder">'+placeholder+'</span>');
    $(this).removeAttr('placeholder');
    }
  });
  $('input').blur(function(){
  //  alert($(this).parent().find('.input-placeholder'));
  //$(this).attr('placeholder',placeholder);
    $(this).parent().find('.input-placeholder').remove();

  });



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
                    ModifiedBy: 11

    });

this.updatedetails = this.formBuilder.group({

      CompanyName:'',
      //  CompanyName: new Control(this.updatedetails.CompanyName.value),
    //  CompanyName: this.updatedetails.controls.CompanyName,
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
                    ModifiedBy: 11

    });





  }

  private getAPIAccessToken(params: URLSearchParams) {
    this.dataServices.getToken(params).subscribe(
        (tokenData) => {
          this.tokenRecieved = true;
          this.toasterService.pop('success', 'API Token Received');
          localStorage.setItem('access_token', JSON.stringify(tokenData));
          this.getAllAPIData();
        },
        (tokenError) => {
          this.tokenRecieved = false;
          this.toasterService.pop('error', 'API Token Not Received');
        }
    );
  }

  private getAllCompanyTypes() {
    this.dataServices.getAllCompanies().subscribe(
        (companyData: Response) => {
          this.toasterService.pop('success', 'Company Types Received');
          this.companyType = JSON.parse(companyData.json()).Results;
          if(this.companyType && this.companyType[0]){
            this.addCompanyType = this.companyType[0];
          }
          this.getAllDepositories();
        },
        (companyError) => {
          this.toasterService.pop('error', 'Company Types Not Received');
        });
  }

  private getAllDepositories() {
    this.dataServices.getAllDepositories().subscribe(
        (depositoryData: Response) => {
          this.dataLoded = true;
          this.toasterService.pop('success', 'Company Depository List Received');
          this.depository = JSON.parse(depositoryData.json()).Results;
          if(this.depository && this.depository[0]) {
            this.addDepository = this.depository[0];
          }
        },
        (companyError) => {
          this.dataLoded = false;
          this.toasterService.pop('error', 'Company Depository List Not Received');
        });
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

  editCompany(update_id){
localStorage.setItem('updateid',update_id);

    this.dataServices.getUser_id(update_id).subscribe((data: Array<Object>)=> {

       this.profile_id = data;

        console.log("test");
        console.log(this.profile_id);



        });

   $('#Editcompany').modal('show');
console.log(update_id);

}


 onUpdatePost(CompanyID)
  {
 let updateid= localStorage.getItem('updateid');

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
console.log("testt : " +this.tg);
  return Object.keys(obj).map((key)=>{return obj[key]});


  }

  generateArrayC(obj){

  console.log(Object.keys(obj).forEach((key) => {(obj[key] == null)  && delete obj[key]; return  `${parseInt(obj[key]).toString().split('#')[1]}`}));

      return Object.keys(obj).map((key)=>{!obj[key] !== null ; return `${obj[key].toString().split('#')[1]}` });


  }




  generateArrayTR(obj){
    console.log(typeof this.tg);

    var arr = $.map(this.tg, function(el) {return el; })

    console.log(arr);
    console.log(typeof arr);
    var unique = arr.filter(function(elem, index, self) {

      return index == self.indexOf(elem);


    });

    console.log("new_obj    --+result");

    console.log(unique);
    console.log(typeof unique);

    console.log(unique.shift());
    console.log(unique);
    console.log(obj);
    console.log("obj");
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
    console.log("arraytoobject");
    console.log(arraytoobject);

    // console.log(arr_obj);
    //
    //
    // console.log(typeof arr_obj);

    console.log(Object.keys(arraytoobject).forEach((key) => {

      if (arraytoobject[key] === null || key == "CompanyID" || key == "CompanyISIN" || key =="CompanyType"|| key =="Currency"|| key =="EmailDomains"
      || key =="SecretaryPhone" || key =="SharesInDemat" || key =="SharesListed"  )
      delete arraytoobject[key];

    }));

    //console.log("testtt");

    return Object.keys(arraytoobject).map((key)=>{return arraytoobject[key]});


  }




}
