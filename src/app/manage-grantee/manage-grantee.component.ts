import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { ManageGranteeService } from './manage-grantee.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
@Pipe({ name: 'objngfor11' })
export class ObjNgFor11 implements PipeTransform {
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
@Pipe({ name: 'objngfor111' })
export class ObjNgFor111 implements PipeTransform {
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


@Pipe({ name: 'objngfor222' })
export class ObjNgFor222 implements PipeTransform {
TR=[];
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



// ,VestingCondition2: string,VestingCondition3: string,
//   VestingCondition4: string,VestingCondition5: string,
// VestingCondition6: string
@Pipe({ name: 'objngfor22' })
export class ObjNgFor22 implements PipeTransform {
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


@Component({
  selector: 'app-manage-grantee',
  templateUrl: './manage-grantee.component.html',
  styleUrls: ['./manage-grantee.component.css'],
  providers: [ManageGranteeService]
})
export class ManageGranteeComponent implements OnInit {
  tokenRecieved: boolean = false;
  profile: Array<any> = [];
  schemedetailsid:Array<any>=[];
  scheme_values:Array<any>=[];
  plan_values:Array<any>=[];
  company_values:Array<any>=[];
  postdata:FormGroup;
edit_plan:Array<any>=[];
  edit_data:FormGroup;
  getschemewizarddetails:Array<any>=[];
  getschemewizard_table_xml:Array<any>=[];
  constructor(private formBuilder: FormBuilder,private managegranteeService: ManageGranteeService ,private localStorageService: LocalStorageService) { }

  ngOnInit() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);


    this.postdata = this.formBuilder.group({
      GrantID: '',SchemeDossierID:'',
      GrantNo:'',GrantDate:'',
      RecordDate:'',GrantDocuments: '',
      OptionsGranted:'',ModifiedBy:12 ,
      AcceptancedRequired:'',GrantAcceptedWithinDays:'',
      RemindBeforeDays:'',RemindIntervalDays:'',VestingType:
    	 '',VestingDate:'1/1/2009',NoOfGrades:'',

       VestingCondition:'',


       NoOfVestingCondition:
    	 '',VestingCondition1:'',
       VestingCondition2:'',VestingCondition3:'',
       VestingCondition4:'',VestingCondition5:'',VestingCondition6:'',
       ExercisePrice:'',ExerciseCurrency:'',
       ExercisePaymentOptions:'',ExerciseLastDate:'1/1/2009',
       ExerciseWithinOfVesting:'',Status:'',ClosureRemarks:''
    });
    // let checkboxArray = new FormArray([
    //   new FormControl({checked: true, value: "Y"}),
    //   new FormControl({checked: false, value: "value2"})
    // ]);


    this.edit_data= this.formBuilder.group({
      GrantID: '',SchemeDossierID:'',
      GrantNo:'',GrantDate:'1/1/2009',
      RecordDate:'1/1/2009',GrantDocuments: '',
      OptionsGranted:'',ModifiedBy:12 ,
      AcceptancedRequired:'',GrantAcceptedWithinDays:'',
      RemindBeforeDays:'',RemindIntervalDays:'',VestingType:
    	 '',VestingDate:'1/1/2009',NoOfGrades:'',

       VestingCondition:'',


       NoOfVestingCondition:
    	 '',VestingCondition1:'',
       VestingCondition2:'',VestingCondition3:'',
       VestingCondition4:'',VestingCondition5:'',VestingCondition6:'',
       ExercisePrice:'',ExerciseCurrency:'',
       ExercisePaymentOptions:'',ExerciseLastDate:'1/1/2009',
       ExerciseWithinOfVesting:'',Status:'',ClosureRemarks:'',VestingSchedule:""
    });


    $(document).ready(function(){
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
	$(this).attr('placeholder',this.placeholder);
    $(this).parent().find('.input-placeholder').remove();

  });
});
$(document).ready(function(){
 $("#head2").hide();

  //   $(".head1").click(function(){
	// $("#search").hide();
  //  $("#head2").show();
  //  });
  //  $("#close").click(function(){
  //  $("#head2").hide();
  //
  //  });

           $('#Grant').on("click", '.head1', function () {
                           $("#search").hide();
                           $("#head2").show();
                       });

                       $('#Grant').on("click", '.close_button', function () {

                                       $("#head2").hide();
                                   });
 });
 $(document).ready(function(){
 $("#search").hide();

  //   $(".employee").click(function(){
  //  $("#search").show();
  //  $("#head2").hide();
  //  });

   $('#Grant').on("click", '.employee', function () {

                   $("#search").show(); $("#head2").hide();
               });

    $("#asign").hide();
    $("#search1").click(function(){
   $("#asign").show();
   });
   $("#submit").click(function(){
   $("#search").hide();
    $("#asign").hide();
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
$(function () {
      $('#txtBoardApprovalDate7').daterangepicker({
        locale: {
            format: 'DD-MMM-YYYY'
        },
        singleDatePicker: true,
        showDropdowns: false
    });
  }
);
$(function () {
      $('#txtBoardApprovalDate8').daterangepicker({
        locale: {
            format: 'DD-MMM-YYYY'
        },
        singleDatePicker: true,
        showDropdowns: false
    });
  }
);


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
            (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value = (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value + data + ";" + data + ",";
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
            (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value = (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value + data + ";" + data + ",";
            this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
            }
        });
    });
	$(function() {
        $("#file_upload2").uploadifive({
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
            (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value = (<HTMLInputElement>document.getElementById('<%= hdnFiles.ClientID %>')).value + data + ";" + data + ",";
            this.divAttached.innerHTML = this.divAttached.innerHTML + "<div><a href='/Uploads/Application/" + data + "' target=_blank>" + data + "</a>&nbsp;&nbsp;&nbsp;<img style='cursor: pointer' src='Images/Attach/cancel.png' id='" + data + ";" + data + "," + "' onclick='javascript:DetachFiles(this)' /></div>";
            }
        });
    });


    this.managegranteeService.getGrants().subscribe((data: Array<Object>)=> {

       this.profile = data;

        console.log(this.profile);



        });


        this.managegranteeService.getcompany().subscribe((data: Array<Object>)=> {

               this.company_values = data;

                console.log(this.company_values);

                });


                if ($("#checkbox_valueY").val()){
                  console.log();
                    $("#condition_num").show();
                }
                else{
                    console.log();
                  $("#condition_num").hide();
                  $("#condition_details").hide();
                }


  }

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
  $('#mtable tbody').append($("#mtable tbody tr:first").clone());
  //$('#mtable tbody tr:last :checkbox').attr('checked',false);
  var rowCount = $('#mtable tr').length;
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
  grade_details(): any {
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
  this.edit_data.controls['VestingCondition'].setValue((<HTMLInputElement>document.getElementById('checkbox_value')).value);
  this.edit_data.controls['VestingCondition1'].setValue((<HTMLInputElement>document.getElementById('condition1')).value);

  this.edit_data.controls['VestingCondition2'].setValue((<HTMLInputElement>document.getElementById('condition2')).value);

  this.edit_data.controls['VestingCondition3'].setValue((<HTMLInputElement>document.getElementById('condition3')).value);

  this.edit_data.controls['VestingCondition4'].setValue((<HTMLInputElement>document.getElementById('condition4')).value);
  this.edit_data.controls['VestingCondition5'].setValue((<HTMLInputElement>document.getElementById('condition5')).value);
  this.edit_data.controls['VestingCondition6'].setValue((<HTMLInputElement>document.getElementById('condition6')).value);





  };


  //var rowCount = $('#conditiontable tr:visible').length;

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


  private getAPIAccessToken(params: URLSearchParams) {

        console.log(params);
    this.managegranteeService.getToken(params).subscribe(
        (tokenData) => {
          this.tokenRecieved = true;
          localStorage.setItem('access_token', JSON.stringify(tokenData));

        },
        (tokenError) => {
          this.tokenRecieved = false;
        }
    );
  }
  getschemeplan(getschemeid){
  localStorage.setItem('getschemeid',getschemeid);

      this.managegranteeService.getschemeid(getschemeid).subscribe((data: Array<Object>)=> {

         this.schemedetailsid = data;

          console.log("test");
          console.log(this.schemedetailsid);

          });


             $('#document').modal('show');
  }




   companyname_change(value)
   {
      console.log("value");
     console.log(value);


     this.managegranteeService.getscheme(value).subscribe((data: Array<Object>)=> {

            this.scheme_values = data;

             console.log(this.scheme_values);

             });



   }


   scheme_change(value)
   {
      console.log("value");
     console.log(value);


     this.managegranteeService.getpaln(value).subscribe((data: Array<Object>)=> {

            this.plan_values = data;

             console.log(this.plan_values);

             });

   }

   getdate(): any {
     console.log("Ds");
     console.log("value");
     console.log((<HTMLInputElement>document.getElementById('txtBoardApprovalDate7')).value);
     console.log((<HTMLInputElement>document.getElementById('txtBoardApprovalDate8')).value);

//  console.log( $("#txtBoardApprovalDate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val());
       //return (<HTMLInputElement>document.getElementById('txtBoardApprovalDate')).value;
//this.postdata.controls['joiningdate'].value = 'dsd';
this.postdata.controls['GrantDate'].setValue((<HTMLInputElement>document.getElementById('txtBoardApprovalDate7')).value);
this.postdata.controls['RecordDate'].setValue((<HTMLInputElement>document.getElementById('txtBoardApprovalDate8')).value);

   };




   onSubmitPost()
   {
 let json_post_data=JSON.stringify(this.postdata.value);
      console.log(json_post_data);

     this.managegranteeService.creategrantee(json_post_data).subscribe(
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

   let updateid= localStorage.getItem('updateid');


     console.log("SchemeDossierID");
     console.log(updateid);
       console.log("SchemeDossierID");
   let json_put_data=JSON.stringify(this.edit_data.value);
   console.log("json_put_data");
      console.log(json_put_data);
   console.log("json_put_data");
    // this.edit_data.controls["NoofOptionsAvailable"].value


     this.managegranteeService.editplan(json_put_data,updateid).subscribe(
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

   getschemewizard(getschemewizard){
     localStorage.setItem('updateid',getschemewizard);
   console.log(getschemewizard);

   this.managegranteeService.getschemewizard(getschemewizard).subscribe((data: Array<Object>)=> {

      this.getschemewizarddetails = data;

       console.log("getschemewizarddetails");
       console.log(this.getschemewizarddetails);

       });

       this.managegranteeService.getschemewizard_table_xml(getschemewizard).subscribe((data: Array<Object>)=> {

          this.getschemewizard_table_xml = data;

           console.log("getschemewizard_table_xml");
           console.log(this.getschemewizard_table_xml);

           });


   }



}
