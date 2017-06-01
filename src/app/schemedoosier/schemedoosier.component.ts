import { Component, OnInit, VERSION, ElementRef,Renderer2, ViewChild, Pipe, PipeTransform  } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
declare var $:any;
import{ SchemedoosierService } from './schemedoosier.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { NumberTodatePipe } from './number-todate.pipe';

import { NumberTomonthPipe } from './number-tomonth.pipe';

import { NumberToyearPipe } from './number-toyear.pipe';
const modifiedBy: string = "11";

@Pipe({ name: 'objngforvalue' })
export class ObjNgForValue implements PipeTransform {

  transform(v, args) {
return 1;

   }

}
@Component({
  selector: 'app-schemedoosier',
  templateUrl: './schemedoosier.component.html',
  styleUrls: ['./schemedoosier.component.css'],
  providers: [SchemedoosierService]
})
export class SchemedoosierComponent implements OnInit {
results: any = [];
schemedetailsid:Array<any>=[];
profile: Array<any> = [];
company_name: Array<any> = [];
schemedetails: any=[];
  tokenRecieved: boolean = false;
  getallscheme: Array<any> = [];
  postshemedetails:FormGroup;
  postplandetails:FormGroup;
  edit_data:FormGroup;
getschemewizarddetails:any=[];
getschememode:any=[];
getschemetimezone:any=[];
getschemevestingtype:any=[];
getschemenograde:any=[];
getschemepaymentmode:any=[];
getschemeadditioncondition:any=[];
NoofOptionsAvailable:any;
edit_plan:any=[];
new_transfer_vesting_value:any;
output:any;
// values: any = [];
// @ViewChild('fileInput') el:ElementRef;
  constructor(private formBuilder: FormBuilder,private SchemedoosierService: SchemedoosierService,) {

        let params: URLSearchParams = new URLSearchParams();
        params.set('username', 'abc@aaa.com');
        params.set('Password', 'A2bcdef;');
        params.set('grant_type', 'password');
        this.getAPIAccessToken(params);
          //this.name = `Angular v${VERSION.full} : File Upload`
  }

 //  onChange(event) {
 //   console.log('onChange');
 //   var files = event.srcElement.files;
 //   console.log(files);
 // }

  ngOnInit() {

       $("#top2").hide();
       $("#top3").hide();
       $("#top4").hide();
       $("#top5").hide();
       $("#top6").hide();
          $("#show").click(function(){
              $("#top1").hide();
       $("#top2").show();
         });
         $("#show1").click(function(){
              $("#top2").hide();
       $("#top3").show();
         });
         $("#show2").click(function(){
              $("#top3").hide();
       $("#top4").show();
         });
          $("#show3").click(function(){
              $("#top4").hide();
       $("#top5").show();
         });
         $("#show4").click(function(){
              $("#top5").hide();
       $("#top6").show();
         });
         $("#back").click(function(){
              $("#top5").hide();
       $("#top5").show();
         });
         $("#back1").click(function(){
              $("#top5").hide();
       $("#top4").show();
         });
          $("#back2").click(function(){
              $("#top4").hide();
       $("#top3").show();
         });
         $("#back3").click(function(){
              $("#top3").hide();
       $("#top2").show();
         });
         $("#back4").click(function(){
              $("#top2").hide();
       $("#top1").show();
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
      	$(this).attr('placeholder',this.placeholder);
          $(this).parent().find('.input-placeholder').remove();

        });

      //
      // <script src="js/moment.min.js"></script>
      // <script src="js/jquery.uploadifive.min.js" type="text/javascript"></script>
      // <link rel="stylesheet" type="text/css" href="css/uploadifive.css">

        $(function () {

          $('#Grant').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": true,
            "ordering": true,
            "info": true,
            "autoWidth": false
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
       $(function () {
            $('#txtBoardApprovalDate1').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );
       $(function () {
            $('#txtBoardApprovalDate2').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );
       $(function () {
            $('#txtBoardApprovalDate3').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );
       $(function () {
            $('#txtBoardApprovalDate4').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );
       $(function () {
            $('#txtBoardApprovalDate5').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );
      $(function () {
            $('#txtBoardApprovalDate6').daterangepicker({
              locale: {
                  format: 'DD-MMM-YYYY'
              },
              singleDatePicker: true,
              showDropdowns: false
          });
        }
      );

      // $(document).ready(function

 $("#head2").hide();
//
//           $(".head1").click(function(){
//          $("#head2").show();
//          });
//           $(".close_button").click(function(){
// console.log("closed");
//          $("#head2").hide();
//
//          });

         $('#Grant').on("click", '.head1', function () {

                         $("#head2").show();
                     });

                     $('#Grant').on("click", '.close_button', function () {

                                     $("#head2").hide();
                                 });



this.postshemedetails = this.formBuilder.group({

  CompanyId: '',
  SchemeType: '',
  SchemeName: '',
  // file_upload:'test',
  ModifiedBy:'11'
   });


   this.postplandetails = this.formBuilder.group({

    //  CompanyId: '',
    //  SchemeType: '',
    //  SchemeName: '',
     // file_upload:'test',
     "SchemeDossierID":new FormControl(),"SchemeID":new FormControl(),
     "NoofOptionsAvailable":"",
     "TimeZone":"",
     "Mode":"","TrustName":"",
     "ShowToEmployee":"","SchemeDocuments":"",
     "PlanName":new FormControl(),"ShortName":"",
     "TotalOptions":"","OptionsAvailable":"",
     "TreatmentLapsedOption":"",
     "SharesPerOption":"","BoardApprovalDate":"1/1/2009",
     "ClosureDate":"1/1/2009",
     "VestingType":"",
     "VestingDate":"1/1/2009","NoOfGrades":"","VestingSchedule":0,
     "VestingConditions":0,"NoOfVestingConditions":"","VestingCondition1":"",
     "VestingCondition2":"","VestingCondition3":"","VestingCondition4":"",
     "VestingCondition5":"","VestingCondition6":"","ExercisePrice":"",
     "ExerciseCurrency":"2/2/2009","ExercisePaymentOptions":0,"ExercisePeriod":"1/1/2009","ExerciseWithinOfVesting":0,
     "EmpTransfer":"","EmpTransferVestingWithin":"","EmpTransferExerciseWithin":0,"EmpResignation":"",
     "EmpResignationVestingWithin":0,"EmpResignationExerciseWithin":"","EmpTermination":"",
     "EmpTerminationVestingWithin":"",
     "EmpTerminationExerciseWithin":0,"EmpSuperannuation":"","EmpSuperannuationVestingWithin":0,
     "EmpSuperannuationExerciseWithin":"","EmpPermdisability":0,
     "EmpPermdisabilityVestingWithin":0,"EmpPermdisabilityExerciseWithin":"",
     "EmpDeath":0,"EmpDeathVestingWithin":0,
     "EmpDeathExerciseWithin":"","ModifiedBy":0,"ModifiedOn":0,"ClosureRemark":0,
     "Status":0
      });


      this.edit_data = this.formBuilder.group({

       //  CompanyId: '',
       //  SchemeType: '',
       //  SchemeName: '',
        // file_upload:'test',this.edit_data.controls['NoofOptionsAvailable']

        "SchemeDossierID":2,"SchemeID":new FormControl(),
        "NoofOptionsAvailable":new FormControl(),
        "TimeZone":new FormControl(),
        "Mode":new FormControl(),"TrustName":new FormControl(),
        "ShowToEmployee":"","SchemeDocuments":'',
        "PlanName":new FormControl(),"ShortName":new FormControl(),
        "TotalOptions":new FormControl(),"OptionsAvailable":new FormControl(),
        "TreatmentLapsedOption":new FormControl(),
        "SharesPerOption":new FormControl(),"BoardApprovalDate":new FormControl(),
        "ClosureDate":new FormControl(),
        "VestingType":"",
        "VestingDate":"1/1/2009","NoOfGrades":"","VestingSchedule":0,
        "VestingConditions":0,"NoOfVestingConditions":"","VestingCondition1":"",
        "VestingCondition2":"","VestingCondition3":"","VestingCondition4":"",
        "VestingCondition5":"","VestingCondition6":"","ExercisePrice":"",
        "ExerciseCurrency":"2/2/2009","ExercisePaymentOptions":0,"ExercisePeriod":"","ExerciseWithinOfVesting":0,
        "EmpTransfer":"","EmpTransferVestingWithin":new FormControl(''),"EmpTransferExerciseWithin":0,"EmpResignation":"",
        "EmpResignationVestingWithin":0,"EmpResignationExerciseWithin":"","EmpTermination":"",
        "EmpTerminationVestingWithin":"",
        "EmpTerminationExerciseWithin":0,"EmpSuperannuation":"","EmpSuperannuationVestingWithin":0,
        "EmpSuperannuationExerciseWithin":"","EmpPermdisability":0,
        "EmpPermdisabilityVestingWithin":0,"EmpPermdisabilityExerciseWithin":"",
        "EmpDeath":0,"EmpDeathVestingWithin":0,
        "EmpDeathExerciseWithin":"","ModifiedBy":0,"ModifiedOn":0,"ClosureRemark":0,
        "Status":0
         });

          // var logo1 = (<HTMLInputElement>document.getElementById("EmpT")).value;

         let transfervalue= localStorage.getItem('transfervalue');
        //  (<FormControl>this.edit_data.controls['EmpTransferVestingWithin'])
        //             .setValue("logo1", { onlySelf: true });



        //  this.edit_data.EmpTransferVestingWithin.subscribe(value => {
        //    this.EmpTransferVestingWithin="ds";
        //        console.log("value");
        //         console.log(value);
        //    });
  // this.edit_data.valueChanges.subscribe(data => {
  //   console.log('Form changes', data);
  //
  // })
  //          const nameControl = this.edit_data.controls["EmpTransferVestingWithin"];
  //             nameControl.valueChanges.subscribe(value => {
  //             value="asda";
  //             });





        //  this.edit_data.valueChanges.subscribe(data => {
        //      console.log('Form changes', data)
        //      this.output = data;
        //      console.log(this.output);
        //    })


        $(function() {
              $("#file_upload").uploadifive({
              'successTimeout': 300,
              'swf': 'Images/attach/uploadify.swf',
              'uploadScript': 'HandlerApp.ashx',
              'folder': '~/Uploads/Application/',
              'cancelImg': 'Images/attach/cancel.png',
              'buttonText': 'Attach Docs',
              'fileDesc': 'All Files',
              'fileExt': '*.jpg;*.jpeg;*.gif;*.png;*.pdf;*.doc;*.docx;*.xls;*.xlsx',
              'multi': true,
              'auto': true,
              'fileSizeLimit': '4MB',
              'uploadLimit': 10,
              'removeCompleted':true,
              'onUploadComplete': function (file, data) {
                  document.getElementById('<%= hdnFiles.ClientID %>').innerText = document.getElementById('<%= hdnFiles.ClientID %>').innerText + data + ";" + data + ",";
                  this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
                  }
              });
          });
      	$(function() {
              $("#file_upload1").uploadifive({
              'successTimeout': 300,
              'swf': 'Images/attach/uploadify.swf',
              'uploadScript': 'HandlerApp.ashx',
              'folder': '~/Uploads/Application/',
              'cancelImg': 'Images/attach/cancel.png',
              'buttonText': 'Attach Docs',
              'fileDesc': 'All Files',
              'fileExt': '*.jpg;*.jpeg;*.gif;*.png;*.pdf;*.doc;*.docx;*.xls;*.xlsx',
              'multi': true,
              'auto': true,
              'fileSizeLimit': '4MB',
              'uploadLimit': 10,
              'removeCompleted':true,
              'onUploadComplete': function (file, data) {
                  document.getElementById('<%= hdnFiles.ClientID %>').innerText = document.getElementById('<%= hdnFiles.ClientID %>').innerText + data + ";" + data + ",";
                  this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
                  }
              });
          });
      	$(function() {
              $("#file_upload3").uploadifive({
              'successTimeout': 300,
              'swf': 'Images/attach/uploadify.swf',
              'uploadScript': 'HandlerApp.ashx',
              'folder': '~/Uploads/Application/',
              'cancelImg': 'Images/attach/cancel.png',
              'buttonText': 'Attach Docs',
              'fileDesc': 'All Files',
              'fileExt': '*.jpg;*.jpeg;*.gif;*.png;*.pdf;*.doc;*.docx;*.xls;*.xlsx',
              'multi': true,
              'auto': true,
              'fileSizeLimit': '4MB',
              'uploadLimit': 10,
              'removeCompleted':true,
              'onUploadComplete': function (file, data) {
                  document.getElementById('<%= hdnFiles.ClientID %>').innerText = document.getElementById('<%= hdnFiles.ClientID %>').innerText + data + ";" + data + ",";
                  this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
                  }
              });
          });
      	$(function() {
              $("#file_upload4").uploadifive({
              'successTimeout': 300,
              'swf': 'Images/attach/uploadify.swf',
              'uploadScript': 'HandlerApp.ashx',
              'folder': '~/Uploads/Application/',
              'cancelImg': 'Images/attach/cancel.png',
              'buttonText': 'Attach Docs',
              'fileDesc': 'All Files',
              'fileExt': '*.jpg;*.jpeg;*.gif;*.png;*.pdf;*.doc;*.docx;*.xls;*.xlsx',
              'multi': true,
              'auto': true,
              'fileSizeLimit': '4MB',
              'uploadLimit': 10,
              'removeCompleted':true,
              'onUploadComplete': function (file, data) {
                  document.getElementById('<%= hdnFiles.ClientID %>').innerText = document.getElementById('<%= hdnFiles.ClientID %>').innerText + data + ";" + data + ",";
                  this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
                  }
              });
          });

          this.SchemedoosierService.getAllScheme().subscribe(
              (serviceData: Response) => {
                 this.getallscheme = JSON.parse(serviceData.json()).Results;
                 console.log("this.getallscheme");
        console.log(this.getallscheme);
        console.log("this.getallscheme");
              });

              this.SchemedoosierService.getcompany().subscribe((data: Array<Object>)=> {

                     this.company_name = data;

                      console.log(this.company_name);

                      });


                    //   this.SchemedoosierService.getschemedetails().subscribe(
                    //       (serviceData: Response) => {
                    //          this.schemedetails =  JSON.parse(JSON.stringify(serviceData.json())).Code;
                    //          console.log("getallscheme");
                    // console.log(this.schemedetails);
                    // console.log("getallscheme");
                    //       });


                      this.SchemedoosierService.getschemedetails().subscribe((data: Array<Object>)=> {

                             this.schemedetails = data;

                             console.log("this.getscheme");
                              console.log(this.schemedetails);

                              console.log("this.getscheme");
                              });

                              this.SchemedoosierService.getschememode().subscribe((data: Array<Object>)=> {

                                     this.getschememode = data;

                                     console.log("this.getschememode");
                                      console.log(this.getschememode);

                                      console.log("this.getschememode");
                                      });

                                      this.SchemedoosierService.getschemetimezone().subscribe((data: Array<Object>)=> {

                                             this.getschemetimezone = data;

                                             console.log("this.getschemetimezone");
                                              console.log(this.getschemetimezone);

                                              console.log("this.getschemetimezone");
                                              });

                                              this.SchemedoosierService.getschemevestingtype().subscribe((data: Array<Object>)=> {

                                                     this.getschemevestingtype = data;

                                                     console.log("this.getschemevestingtype");
                                                      console.log(this.getschemevestingtype);

                                                      console.log("this.getschemevestingtype");
                                                      });

                                                      this.SchemedoosierService.getschemenograde().subscribe((data: Array<Object>)=> {

                                                             this.getschemenograde = data;

                                                             console.log("this.getschemenograde");
                                                              console.log(this.getschemenograde);

                                                              console.log("this.getschemenograde");
                                                              });
                                                              this.SchemedoosierService.getschemepaymentmode().subscribe((data: Array<Object>)=> {

                                                                     this.getschemepaymentmode = data;

                                                                     console.log("this.getschemepaymentmode");
                                                                      console.log(this.getschemepaymentmode);

                                                                      console.log("this.getschemepaymentmode");
                                                                      });
                                                                      this.SchemedoosierService.getschemeadditioncondition().subscribe((data: Array<Object>)=> {

                                                                             this.getschemeadditioncondition = data;

                                                                             console.log("this.getschemeadditioncondition");
                                                                              console.log(this.getschemeadditioncondition);

                                                                              console.log("this.getschemeadditioncondition");
                                                                              });



  }



                                // END JQuery
                                    // END JQuery
                                      // END JQuery
                                        // END JQuery


//
ngAfterViewInit() {
       setTimeout(() => {
         this.edit_data['controls']['EmpTransferVestingWithin'].setValue('bars');
       });
   }



private getAPIAccessToken(params: URLSearchParams) {

      console.log(params);
  this.SchemedoosierService.getToken(params).subscribe(
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

  setTimeout(() => {
    this.edit_data['controls']['EmpTransferVestingWithin'].setValue('bar');
  });
let json_post_data=JSON.stringify(this.postshemedetails.value);
   console.log(json_post_data);

  this.SchemedoosierService.createScheme(json_post_data).subscribe(
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


getschemeid(getschemeid,SchemeDossierID){
localStorage.setItem('getschemeid',getschemeid);
localStorage.setItem('SchemeDossierID',SchemeDossierID);
    this.SchemedoosierService.getschemeid(getschemeid).subscribe((data: Array<Object>)=> {

       this.schemedetailsid = data;

        console.log("test");
        console.log(this.schemedetailsid);

        });


           $('#Addplan').modal('show');
}

onSubmitplan()
{
let json_post_data=JSON.stringify(this.postplandetails.value);
   console.log(json_post_data);

  this.SchemedoosierService.createplan(json_post_data).subscribe(
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

onSubmitEdit()
{

let SchemeDossierID= localStorage.getItem('SchemeDossierID');


  console.log("SchemeDossierID");
  console.log(SchemeDossierID);
    console.log("SchemeDossierID");
let json_put_data=JSON.stringify(this.edit_data.value);
console.log("json_put_data");
   console.log(json_put_data);
console.log("json_put_data");
  // this.edit_data.controls["NoofOptionsAvailable"].value


  // this.SchemedoosierService.editplan(json_put_data).subscribe(
  //    data => {
  //
  //     this.edit_plan = data;
  //     console.log(this.edit_plan);
  //    },
  //    error => {
  //      console.error("Error saving user!");
  //      return Observable.throw(error);
  //    }
  // );

}


getschemeplan(getschemeid){
localStorage.setItem('getschemeid',getschemeid);

    this.SchemedoosierService.getschemeid(getschemeid).subscribe((data: Array<Object>)=> {

       this.schemedetailsid = data;

        console.log("test");
        console.log(this.schemedetailsid);

        });


           $('#document').modal('show');
}

getschemewizard(getschemewizard){
console.log(getschemewizard);

this.SchemedoosierService.getschemewizard(getschemewizard).subscribe((data: Array<Object>)=> {

   this.getschemewizarddetails = data;

    console.log("getschemewizarddetails");
    console.log(this.getschemewizarddetails);

    });

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
        var input = document.getElementById("files"),
            output = document.getElementById('output'),
            fileData; // We need fileData to be visible to getBuffer.

        // Eventhandler for file input.
        function openfile(evt) {
          var files = fileInput.target.files;
          // Pass the file to the blob, not the input[0].
          fileData = new Blob([files[0]]);
          // Pass getBuffer to promise.
          var promise = new Promise(getBuffer);
          // Wait for promise to be resolved, or log error.
          promise.then(function(data) {
            // Here you can pass the bytes to another function.
            output.innerHTML = data.toString();
            console.log(data);
          }).catch(function(err) {
            console.log('Error: ',err);
          });
        }

        /*
          Create a function which will be passed to the promise
          and resolve it when FileReader has finished loading the file.
        */
        function getBuffer(resolve) {
          var reader = new FileReader();
          reader.readAsArrayBuffer(fileData);
          reader.onload = function() {
            var arrayBuffer = reader.result
            var bytes = new Uint8Array(arrayBuffer);
            resolve(bytes);
          }
        }

        // Eventlistener for file input.
        input.addEventListener('change', openfile, false);
      }(document));

  }


EmpTransferVestingWithin(transfervalue:any){
console.log("transfervalue");
console.log(transfervalue);

// let year = document.getElementById('EmpTransferVestingWithin_year');
// let month = document.getElementById('EmpTransferVestingWithin_month');
// let day = document.getElementById('EmpTransferVestingWithin_day');
let year=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_year')).value;
let month=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_month')).value;
let day=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_day')).value;
var total=0;
total+=(parseInt(year) * 365) + (parseInt(month) * 31) + (parseInt(day) * 1) ;

(<HTMLInputElement>document.getElementById('EmpTransferValue')).value = total.toString();


document.getElementById('EmpTransferValue').innerHTML += total.toString();
(<HTMLInputElement>document.getElementById("EmpTransferValue")).focus();
//$('#EmpTransferVestingWithin_year').attr('value', total);
// transfervalue=total;

// console.log(transfervalue);
// console.log(year);
// console.log(month);
// console.log(day);


console.log(total);

}

EmpTransferVestingWithin_onfocus(transfervalue:any){

  let year=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_year')).value;
  let month=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_month')).value;
  let day=(<HTMLInputElement>document.getElementById('EmpTransferVestingWithin_day')).value;
  var total=0;
  total+=(parseInt(year) * 365) + (parseInt(month) * 31) + (parseInt(day) * 1) ;

  (<HTMLInputElement>document.getElementById('EmpT')).value = total.toString();

   (<HTMLInputElement>document.getElementById("EmpT")).focus();
console.log(this.output);

this.output=total;
console.log("output");
console.log(this.output);
  transfervalue=total;
  localStorage.setItem('transfervalue',transfervalue);
    console.log("transfervalue");
  console.log(transfervalue);

}




}
