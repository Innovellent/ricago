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
@Pipe({ name: 'objngforvalue1' })
export class ObjNgForValue1 implements PipeTransform {

  transform(v, args) {
    console.log(v);
    //console.log(`${v.toString().split('#')[0]}`);
      console.log("Vesting_condition");
      var single:any="1";
      var granded:any="2";
                if(v==parseInt(single))
                {
                  console.log("single");
                $("#single").show();
                $("#granded").hide();
      }
      if(v==parseInt(granded)){
        console.log("granded");
        $("#granded").show();
        $("#single").hide();
      }

   }

 }

 @Pipe({ name: 'objngforvalue3' })
 export class ObjNgForValue3 implements PipeTransform {
 TR=[];
 transform(v, args) {
   //console.log(`${v.toString().split('#')[0]}`);
     console.log("xmltotable");
   if (v!=null)
   {
     console.log("xmltotable");
     console.log(v);
     let xmlDoc=$.parseXML( v );
 $(xmlDoc).find("item").each(function(i, n) {
       console.log("xmltotable");
       var html = "<tr>\n" +
     // "<td>  <input type='text' value =" +$(n).find("gradeno").text()+" ></td>\n" +
         "<td><span>" + $(n).find("gradeno").text() + "</span></td>\n" +
"<td>  <input type='text' class=''form-control' style='width: 62%;' value =" +$(n).find("vestingdate").text()+" ></td>\n" +
"<td>  <input type='text' class='form-control' style='width: 62%;'' value =" +$(n).find("vestingpercent").text()+" ></td>\n" +

           // "<td>" +  $(n).find("vestingdate").text() + "</td>\n" +
           // "<td>" + $(n).find("vestingpercent").text() + "</td>\n" +
           // "<td><img src='" + $(n).find("Picture").text() + "'></td>\n"
           "</tr>";
       $("table#mtable tbody").append(html);
   });
       console.log("xmltotable");
  }




  }

 }

 @Pipe({ name: 'objngforvalue2' })
 export class objngforvalue2 implements PipeTransform {
 TR=[];
 transform(v, args) {
   console.log(v);
   //console.log(`${v.toString().split('#')[0]}`);
     console.log("Accepted_Condition");

   if (v=='N')
   {
     console.log(v);
     $("#condition_num").hide();
     $("#condition_details").hide();
       console.log("Accepted_Condition");
  }

  }

 }
 @Pipe({ name: 'objngforvalue4' })
 export class ObjNgForValue4 implements PipeTransform {
 TR=[];
   transform(v, args):any {
     console.log(v);
     //console.log(`${v.toString().split('#')[0]}`);
       console.log("Accepted_Condition_test");
       //var jsLang = 'jquery';

     if (v=="VestingCondition1")
     {
       console.log("VestingCondition1");
       $("#conditiontable tbody tr#VestingCondition6").remove();
       // $("#condition_details").hide();
         console.log("Accepted_Condition");
    }
    if (v=="VestingCondition2")
    {
      //console.log(VestingCondition2);
      console.log("VestingCondition2");
      $("#conditiontable tbody tr#VestingCondition2").remove();
      // $("#condition_details").hide();
        console.log("Accepted_Condition");
   }
   if (v=="VestingCondition3")
   {
     console.log("VestingCondition3");
     $("#conditiontable tbody tr#VestingCondition3").remove();
     // $("#condition_details").hide();
       console.log("Accepted_Condition");
  }
  if (v=="VestingCondition4")
  {
    console.log("VestingCondition4");
    $("#conditiontable tbody tr#VestingCondition4").remove();
    // $("#condition_details").hide();
      console.log("Accepted_Condition");
 }
 if (v=="VestingCondition5")
 {
   console.log("VestingCondition5");
   $("#conditiontable tbody tr#VestingCondition5").remove();
   // $("#condition_details").hide();
     console.log("Accepted_Condition");
 }
 if (v=="VestingCondition6")
 {
   console.log("VestingCondition6");
   $("#conditiontable tbody tr#VestingCondition6").remove();
   // $("#condition_details").hide();
     console.log("Accepted_Condition");
 }

    }

 }
// @Pipe({ name: 'objngforvalue' })
// export class ObjNgForValue implements PipeTransform {
//
//   transform(v, args) {
// return 1;
//
//    }
//
// }
// @Pipe({ name: 'objngforvalue' })
// export class ObjNgForValue implements PipeTransform {
//
//   transform(v, args) {
// return 1;
//
//    }
//
// }
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
getschemewizard_table_xml:Array<any>=[];
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
     "VestingDate":"1/1/2009","NoOfGrades":"","VestingSchedule":'',
     "VestingConditions":'',"NoOfVestingConditions":"","VestingCondition1":"",
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
        "VestingDate":"1/1/2009","NoOfGrades":"","VestingSchedule":'',
        "VestingConditions":'',"NoOfVestingConditions":"","VestingCondition1":"",
        "VestingCondition2":"","VestingCondition3":"","VestingCondition4":"",
        "VestingCondition5":"","VestingCondition6":"","ExercisePrice":"",
        "ExerciseCurrency":"2/2/2009","ExercisePaymentOptions":0,"ExercisePeriod":"","ExerciseWithinOfVesting":'',
        "EmpTransfer":"","EmpTransferVestingWithin":new FormControl(''),"EmpTransferExerciseWithin":'',"EmpResignation":"",
        "EmpResignationVestingWithin":'',"EmpResignationExerciseWithin":"","EmpTermination":"",
        "EmpTerminationVestingWithin":"",
        "EmpTerminationExerciseWithin":'',"EmpSuperannuation":"","EmpSuperannuationVestingWithin":'',
        "EmpSuperannuationExerciseWithin":"","EmpPermdisability":'',
        "EmpPermdisabilityVestingWithin":'',"EmpPermdisabilityExerciseWithin":"",
        "EmpDeath":'',"EmpDeathVestingWithin":'',
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
// ngAfterViewInit() {
//        setTimeout(() => {
//          this.edit_data['controls']['EmpTransferVestingWithin'].setValue('bars');
//        });
//    }
logCheckboxY(element: HTMLInputElement): void {
      //  this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`
console.log("Checkbox");
console.log(element);
(<HTMLInputElement>document.getElementById('checkbox_value')).value = "Y";
// this.edit_data.controls['VestingCondition'].setValue("Y");
$("#condition_num").show();
$("#condition_details").show();

    }
    logCheckboxN(element: HTMLInputElement): void {
          //  this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`
  console.log("Checkbox");
  console.log(element);
  (<HTMLInputElement>document.getElementById('checkbox_value')).value = "N";
  //this.edit_data.controls['VestingCondition'].setValue("N");
$("#condition_num").hide();
$("#condition_details").hide();
        }
        dynamic_table_condition(value)
          {
        localStorage.setItem('rowCount2', $('#conditiontable tr:visible').length);
          let rowCount1= localStorage.getItem('rowCount2');

        console.log("value");
        console.log(value);
        console.log(rowCount1);
        var condition="condition";
        var count=parseInt(value);
        // $('#conditiontable tr:visible').each(function(count) {
        //   $('#conditiontable tbody tr ').html("<tr  ><td class='col-xs-1'> </td>    <td><textarea type='text;  value='' class='form-control'> </textarea></td> </tr>");
        //
        // });
console.log(count);
          for (var i = 1; i <=parseInt(value); i++) {

            var rowCount = $('#conditiontable tr:visible').length;
            // if()

        if(parseInt(rowCount) <6)
        {
        $('#conditiontable tbody').append("<tr  ><td class='col-xs-1'> </td>    <td><textarea type='text;  value='fdf' class='form-control ' > </textarea></td> </tr>");

        //  $('#conditiontable tbody').append($("#conditiontable tbody tr:last").clone());

          //$('#mtable tbody tr:last :checkbox').attr('checked',false);
        var rowCount_v = $('#conditiontable tr:visible').length;
          console.log(rowCount_v);
          var count_add_grade=parseInt(rowCount_v);

            console.log("rowCount");
                $('#conditiontable tbody tr:last td:first').html("Condition"+ count_add_grade);
                console.log("Condition"+ count_add_grade);
        }
        // if((parseInt(rowCount)>parseInt(value))&&(parseInt(rowCount) <6))
        else
        //if((parseInt(rowCount)>parseInt(value)))
        {
        // var slice_number_new=parseInt(rowCount)-6;
        // var slice_number=6-parseInt(value);
        //   console.log("slice_number");
        // console.log(slice_number);
        //   console.log("slice_number_new");
        //   console.log(slice_number_new);
        // $('#conditiontable tbody tr').slice(-slice_number_new).remove();
        //
        //alert("Condition options available only 6 ");
        }



        }
        $('#conditiontable tr:visible').each(function(i) {
              //  if (i === 1)
              //      return;

               var textarea = $(this).find('textarea');
               textarea.eq(0).attr('id', 'condition' + (i+1));
               var textarea = $(this).find('textarea');
               textarea.eq(0).attr('formControlName', 'Vestingcondition' + (i+1));
              // $("#id").css("display", "block");
              //  var textarea = $(this).find('tr');
              //  textarea.eq(0).attr('id', 'VestingCondition' + (i+1));

           });

          }
onchange_typevesting(element: HTMLInputElement): void {
      //  this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`
console.log("onchange_typevesting");
console.log(element);
//  (<HTMLInputElement>document.getElementById('checkbox_value')).value = "N";
//this.edit_data.controls['VestingCondition'].setValue("N");
//let single= "single";
var single:any="1";
var granded:any="2";
if(element==single)
{
  console.log("single");
$("#single").show();
$("#granded").hide();
}
if(element==granded){
console.log("granded");
$("#granded").show();
$("#single").hide();
}
    }

      dynamic_table(value)
      {
    console.log("value");
    console.log(value);
    console.log("value");
      for (var i = 1; i <parseInt(value); i++) {
      // $('#mtable tbody').append($("#mtable tbody tr:first").clone());
      $('#mtable tbody').append("<tr ><td class='col-xs-1' ></td>     <td> <input type='text' id'' name='txtBoardApprovalDate' value='' class='form-control' style='width: 62%;'></td>    <td><input type='text' class='form-control'></td>  </tr>");


      //$('#mtable tbody tr:last :checkbox').attr('checked',false);
      var rowCount = $('#mtable tr:visible').length;
      console.log(rowCount);
      var count_add_grade=parseInt(rowCount)-1;
      $('#mtable tbody tr:last td:first').html(count_add_grade);
    }
    $('#mtable tr').each(function(i) {
          //  if (i === 1)
          //      return;

           var textarea = $(this).find('input');
           textarea.eq(0).attr('id', 'txtBoardApprovalDate' + (i+1));
           var textarea = $(this).find('textarea');
           textarea.eq(0).attr('formControlName', 'Vestingcondition' + (i+1));
          //  var textarea = $(this).find('textarea');
          //  textarea.eq(0).attr('value');
       });

      //      var xml = "";
      //      xml += '<items>';
      //      $('#mtable tr:not(:first)').each(function(i, tr){
      //          var tr = $(tr);
      //         // var index = $.trim(this.tr.find('td:first').text());
      //          xml += '<item>';
      //          $(this).find('td:first').each(function(j, td){
      //             console.log("gradeno");
      //              xml += '<gradeno>';
      //              xml += $.trim($(td).text());
      //              xml += '</gradeno>';
      //          });
      //          $(this).find('td:nth-child(2)').each(function(j, td){
      //              xml += '<vestingdate>';
      //              xml += $.trim($(td).find('input.form-control').val());
      //              xml += '</vestingdate>';
      //          });
      //           $(this).find('td:nth-child(3)').each(function(j, td){
      //              xml += '<vestingpercent>';
      //              xml += $.trim($(td).find('input.form-control').val());
      //              xml += '</vestingpercent>';
      //          });
      //          xml += '</item>';
      //          console.log("xml");
      //      });
      //      xml += '</items>';
      //
      //      console.log(xml);
      // console.log("xml");
      // (<HTMLInputElement>document.getElementById('grant_details')).value = xml;
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
//  this.edit_data.controls["NoofOptionsAvailable"].value


  this.SchemedoosierService.editplan(json_put_data,SchemeDossierID).subscribe(
     data => {

      this.edit_plan = data;
      console.log(this.edit_plan);
     },
     error => {
       console.error("Error saving user!");
       return Observable.throw(error);
     }
  );

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
    this.SchemedoosierService.getschemewizard_table_xml(getschemewizard).subscribe((data: Array<Object>)=> {

       this.getschemewizard_table_xml = data;

        console.log("SchemedoosierService");
        console.log(this.SchemedoosierService);

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









joiningdate(value): any {
  console.log("Ds");
  console.log(value);
  //console.log((<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value);
//  console.log( $("#txtBoardApprovalDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val());
    //return (<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value;
//this.postdata.controls['joiningdate'].value = 'dsd';
//this.edit_data.controls['EmpTerminationVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpTransferValue')).value);
this.edit_data.controls['EmpTransferExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpTransferExerciseWithin')).value);
this.edit_data.controls['EmpTransferVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpTransferVestingWithin')).value);

this.edit_data.controls['EmpResignationExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpResignationExerciseWithin')).value);

this.edit_data.controls['EmpResignationVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpResignationVestingWithin')).value);



this.edit_data.controls['EmpTerminationVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpTerminationVestingWithin')).value);

this.edit_data.controls['EmpTerminationExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpTerminationExerciseWithin')).value);


this.edit_data.controls['EmpSuperannuationVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpSuperannuationVestingWithin')).value);

this.edit_data.controls['EmpSuperannuationExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpSuperannuationExerciseWithin')).value);


this.edit_data.controls['EmpPermdisabilityVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpPermdisabilityVestingWithin')).value);

this.edit_data.controls['EmpPermdisabilityExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpPermdisabilityExerciseWithin')).value);


this.edit_data.controls['EmpDeathVestingWithin'].setValue((<HTMLInputElement>document.getElementById('EmpDeathVestingWithin')).value);

this.edit_data.controls['EmpDeathExerciseWithin'].setValue((<HTMLInputElement>document.getElementById('EmpDeathExerciseWithin')).value);


console.log("Ds");
var xml = "";
xml += '<items>';
$('#mtable tr:not(:first)').each(function(i, tr){
    var tr = $(tr);
   // var index = $.trim(this.tr.find('td:first').text());
    xml += '<item>';
    $(this).find('td:first').each(function(j, td){
       console.log("gradeno");
        xml += '<gradeno>';
        xml += $.trim($(td).text());
        xml += '</gradeno>';
    });
    $(this).find('td:nth-child(2)').each(function(j, td){
        xml += '<vestingdate>';
        xml += $.trim($(td).find('input.form-control').val());
        xml += '</vestingdate>';
    });
     $(this).find('td:nth-child(3)').each(function(j, td){
        xml += '<vestingpercent>';
        xml += $.trim($(td).find('input.form-control').val());
        xml += '</vestingpercent>';
    });
    xml += '</item>';
    console.log("xml");
});
xml += '</items>';

console.log(xml);
console.log("xml");
(<HTMLInputElement>document.getElementById('grant_details')).value = xml;
//console.log(value);
//console.log((<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value);
//  console.log( $("#txtBoardApprovalDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val());
  //return (<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value;
//this.postdata.controls['joiningdate'].value = 'dsd';
this.edit_data.controls['VestingSchedule'].setValue((<HTMLInputElement>document.getElementById('grant_details')).value);
console.log((<HTMLInputElement>document.getElementById('checkbox_value')).value);
//this.edit_data.controls['VestingCondition'].setValue((<HTMLInputElement>document.getElementById('checkbox_value')).value);
this.edit_data.controls['VestingCondition1'].setValue((<HTMLInputElement>document.getElementById('condition1')).value);

this.edit_data.controls['VestingCondition2'].setValue((<HTMLInputElement>document.getElementById('condition2')).value);

this.edit_data.controls['VestingCondition3'].setValue((<HTMLInputElement>document.getElementById('condition3')).value);

this.edit_data.controls['VestingCondition4'].setValue((<HTMLInputElement>document.getElementById('condition4')).value);
this.edit_data.controls['VestingCondition5'].setValue((<HTMLInputElement>document.getElementById('condition5')).value);
this.edit_data.controls['VestingCondition6'].setValue((<HTMLInputElement>document.getElementById('condition6')).value);


};



}
