import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { CompanyGradeService } from './company-grade.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-companygrade',
  templateUrl: './company-grade.component.html',
  styleUrls: ['./company-grade.component.css'],
  providers: [CompanyGradeService]

})
export class CompanyGradeComponent implements OnInit {
  results: any = [];
  tokenRecieved: boolean = false;
postdata:FormGroup;
profile: Array<any> = [];
delete_post_id={};
profile_id: Array<any> = [];
company_name: Array<any> = [];
updatedetails:FormGroup;
profile_update: Array<any> = [];
  constructor(private formBuilder: FormBuilder,private contentService: CompanyGradeService ,private localStorageService: LocalStorageService) { }



  ngOnInit() {

    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);


 this.postdata = this.formBuilder.group({

      CompanyID: '',
      GradeCode: '',
      GradeName: '',
      ModifiedBy:'suresh'
    });


this.updatedetails = this.formBuilder.group({

      CompanyID: '',
      GradeCode: '',
      GradeName: '',
      ModifiedBy:'suresh'
    });






    this.contentService.getUser().subscribe((data: Array<Object>)=> {

       this.profile = data;

        console.log(this.profile);



        });


this.contentService.getcompany().subscribe((data: Array<Object>)=> {

       this.company_name = data;

        console.log(this.company_name);



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

   private getAllAPIData() {
    this.contentService.getAllData().subscribe(
        (serviceData: Response) => {
           this.results = JSON.parse(serviceData.json()).Results;

        });
  }

  private getAPIAccessToken(params: URLSearchParams) {

        console.log(params);
    this.contentService.getToken(params).subscribe(
        (tokenData) => {
          this.tokenRecieved = true;
          localStorage.setItem('access_token', JSON.stringify(tokenData));

        },
        (tokenError) => {
          this.tokenRecieved = false;
        }
    );
  }

updatepost(update_id){
localStorage.setItem('updateid',update_id);

    this.contentService.getUser_id(update_id).subscribe((data: Array<Object>)=> {

       this.profile_id = data;

        console.log("test");
        console.log(this.profile_id);



        });

   $('#edit').modal('show');
console.log(update_id);

}


  onSubmitPost()
  {
let json_post_data=JSON.stringify(this.postdata.value);
     console.log(json_post_data);

    this.contentService.createUser(json_post_data).subscribe(
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

 onUpdatePost(CompanyID)
  {
 let updateid= localStorage.getItem('updateid');

let json_post_data=JSON.stringify(this.updatedetails.value);
     console.log(json_post_data);

    this.contentService.updatedetail(json_post_data,updateid).subscribe(
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


   removepost(post_id) {

    if (confirm("Are you sure you want to delete " + post_id + "?")) {
      this.contentService.removepost(post_id).subscribe(
         data => {

        this.delete_post_id = data;
        console.log(this.profile);
       },
         error => {
           console.error("Error deleting !"+post_id);
           return Observable.throw(error);
         }
      );
    }
  }






}
