import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { UserService } from './user.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  profile: Array<any> = [];
delete_user_id={};
user_id: Array<any> = [];
postdata:FormGroup;
getDepositorycondition:any = [];
grade:any=[];
department:any=[];
designation:any=[];
wheather:any=[];
location:any=[];
division:any=[];
bank:any=[];
company_name: Array<any> = [];
  tokenRecieved: boolean = false;
  editdata:FormGroup;
  public locations = '' ;

  profile_update: Array<any> = [];
  constructor(private  _router : Router,private formBuilder: FormBuilder,private userservice: UserService ,private localStorageService: LocalStorageService)
  {
    this.locations = _router.url;
  }

  ngOnInit() {

        let params: URLSearchParams = new URLSearchParams();
        params.set('username', 'abc@aaa.com');
        params.set('Password', 'A2bcdef;');
        params.set('grant_type', 'password');
        this.getAPIAccessToken(params);


        this.postdata = this.formBuilder.group({

          UsersID:"",UserTypeID:"",EmployeeName:"",EmployeeID:"",
          CompanyID:"",Grade:"",Location:"",
          Department:"",Division:"",Designation:"",
          KMPOrDirector:"",joiningdate:'',EmailID:""
,Address:"",
PAN:"",TaxSlab:""	,BankCode:""	,
IFSCCode:""	,DPName:"",DPID:'',ClientID:""
,NomineeName:"",NomineeContactNo:"",
NomineeAddress:"",NomineeDPName:"",
NomineeDPID:"",NomineeClientID:"",
ModifiedBy:"",AddressProofDoc:"",
BranchName:"",NomineeAddressDoc:"",additionaltext1:""
,additionaltext2:""
,additionaldate1:"",additionaldate2:""
,additionalchoice1:"",additionalchoice2:""

           });



           this.editdata = this.formBuilder.group({
             UsersID:"",UserTypeID:"",EmployeeName:new FormControl(),EmployeeID:new FormControl(),
             CompanyID:new FormControl(''),Grade:new FormControl(''),Location:new FormControl(''),
             Department:new FormControl(''),Division:new FormControl(''),Designation:new FormControl(''),
             KMPOrDirector:new FormControl(),joiningdate:new FormControl(),EmailID:new FormControl()
             ,Address:new FormControl(),
             PAN:new FormControl(),TaxSlab:new FormControl()	,BankCode:new FormControl(),
             IFSCCode:new FormControl(),DPName:new FormControl(),DPID:new FormControl(),
             ClientID:new FormControl()
             ,NomineeName:new FormControl(),NomineeContactNo:new FormControl(),
             NomineeAddress:new FormControl(),NomineeDPName:new FormControl(),
             NomineeDPID:new FormControl(),NomineeClientID:new FormControl(),
             ModifiedBy:new FormControl(),AddressProofDoc:new FormControl(),
             BranchName:new FormControl(),NomineeAddressDoc:new FormControl(),additionaltext1:""
             ,additionaltext2:""
             ,additionaldate1:"",additionaldate2:""
             ,additionalchoice1:"",additionalchoice2:""

               });




//this.joiningdate()

    this.userservice.getUser().subscribe((data: Array<Object>)=> {

       this.profile = data;

        console.log(this.profile);

        });


        this.userservice.getcompany().subscribe((data: Array<Object>)=> {

               this.company_name = data;

                console.log(this.company_name);

                });
                this.userservice.getDepositorycondition().subscribe((data: Array<Object>)=> {

                       this.getDepositorycondition = data;

                       console.log("this.getDepositorycondition");
                        console.log(this.getDepositorycondition);

                        console.log("this.getDepositorycondition");
                        });

                                                                this.userservice.getwheather().subscribe((data: Array<Object>)=> {

                                                                       this.wheather = data;

                                                                        console.log(this.wheather);

                                                                        });





           $(document).ready(function () {

                });

          $(function () {

            $('#Grant').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#Vesting').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#Exercise').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#Generate').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#resolution').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#Scheme').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	 $('#Termination').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	$('#Allot').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
        	$('#Proceed').DataTable({
              "paging": true,
              "lengthChange": false,
              "searching": true,
              "ordering": true,
              "info": true,
              "autoWidth": false
            });
          });

        $(document).ready(function() {
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
        });

        $(document).ready(function(){
          $("#employeeDetails_edit").hide();
         $("#top2").hide();
            $("#show").click(function(){
                $("#top1").hide();
         $("#top2").show();
            });
        });

             $(function () {
              $('#txtBoardApprovalDate').daterangepicker({

                locale: {
                    format: 'DD-MMM-YYYY'
                },
                singleDatePicker: true,
                showDropdowns: false

            });
          }
        );



  }

      //get accessor
      joiningdate(value): any {
        console.log("Ds");
        console.log(value);
        console.log((<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value);
        console.log((<HTMLInputElement>document.getElementById('output')).value);

//  console.log( $("#txtBoardApprovalDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val());
          //return (<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value;
 //this.postdata.controls['joiningdate'].value = 'dsd';
 this.postdata.controls['joiningdate'].setValue((<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value);
 this.postdata.controls['AddressProofDoc'].setValue((<HTMLInputElement>document.getElementById('base64textarea')).value);


      };

      //set accessor including call the onchange callback
      // set joiningdate(v: any) {
      //     if (v !== this.innerValue) {
      //         this.innerValue = v;
      //         this.onChangeCallback(v);
      //     }
      // }

  private getAPIAccessToken(params: URLSearchParams) {

        console.log(params);
    this.userservice.getToken(params).subscribe(
        (tokenData) => {
          this.tokenRecieved = true;
          localStorage.setItem('access_token', JSON.stringify(tokenData));

        },
        (tokenError) => {
          this.tokenRecieved = false;
        }
    );
  }
  goTo(location: string,id): void {
    console.log(id);
      window.location.hash = location;
      $("#employeeDetails_edit").show();
      $("#employeeDetails_post").hide();


      localStorage.setItem('updateid',id);

          this.userservice.getUser_id(id).subscribe((data: Array<Object>)=> {

             this.user_id = data;

              console.log("user_id");
              console.log(this.user_id);



              });


  }
  removeuser(user_id) {

   if (confirm("Are you sure you want to delete " + user_id + "?")) {
     this.userservice.removeuser(user_id).subscribe(
        data => {

       this.delete_user_id = data;
       console.log(this.profile);
      },
        error => {
          console.error("Error deleting !"+user_id);
          return Observable.throw(error);
        }
     );
   }
 }



 onSubmitPost()
 {
 let json_post_data=JSON.stringify(this.postdata.value);
    console.log(json_post_data);

   this.userservice.createUser(json_post_data).subscribe(
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
 file_upload(fileInput: any){
   //
   // if (fileInput.target.files && fileInput.target.files[0]) {
   //     var reader = new FileReader();
   //
   //     reader.onload = function (e : any) {
   //         $('#output').attr('value', e.target.result);
   //     }
   //
   //     reader.readAsDataURL(fileInput.target.files[0]);
   // }
     console.log("test");
     (function (document) {
       var input = document.getElementById("filePicker");


           var handleFileSelect = function(evt) {
           var files = evt.target.files;
           var file = files[0];

           if (files && file) {
               var reader = new FileReader();

               reader.onload = function(readerEvt:any) {
                   var binaryString = readerEvt.target.result;
                   (<HTMLInputElement>document.getElementById("base64textarea")).value = btoa(binaryString);
               };

               reader.readAsBinaryString(file);
           }
       };



       // Eventlistener for file input.
       input.addEventListener('change', handleFileSelect, false);
     }(document));

 }



 companyname_change(value)
 {
    console.log("value");
   console.log(value);


   this.userservice.getgrade(value).subscribe((data: Array<Object>)=> {

          this.grade = data;

           console.log(this.grade);

           });
           this.userservice.getlocation(value).subscribe((data: Array<Object>)=> {

                  this.location = data;

                   console.log(this.location);

                   });
                   this.userservice.getdepartment(value).subscribe((data: Array<Object>)=> {

                          this.department = data;

                           console.log(this.department);

                           });
                           this.userservice.getdivision(value).subscribe((data: Array<Object>)=> {

                                  this.division = data;

                                   console.log(this.division);

                                   });
                                   this.userservice.getdesignation(value).subscribe((data: Array<Object>)=> {

                                          this.designation = data;

                                           console.log(this.designation);

                                           });


                                           this.userservice.getbank(value).subscribe((data: Array<Object>)=> {

                                                  this.bank = data;

                                                   console.log(this.bank);

                                                   });



 }


 onUpdatePost(CompanyID)
  {
 let updateid= localStorage.getItem('updateid');

 let json_post_data=JSON.stringify(this.editdata.value);
     console.log(json_post_data);

    this.userservice.updatedetail(json_post_data,updateid).subscribe(
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









}
