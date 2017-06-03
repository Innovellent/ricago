import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-manage-grantee',
  templateUrl: './manage-grantee.component.html',
  styleUrls: ['./manage-grantee.component.css']
})
export class ManageGranteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

    $(".head1").click(function(){
	$("#search").hide();
   $("#head2").show();
   });
   $("#close").click(function(){
   $("#head2").hide();

   });
 });
 $(document).ready(function(){
 $("#search").hide();

    $(".employee").click(function(){
   $("#search").show();
   $("#head2").hide();
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


  }

}
