import { Component, OnInit, ViewChild } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
declare var $:any;
import { CompanyService } from './company.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ToasterService } from 'angular2-toaster';

const modifiedBy: string = "11";
const currency: string = "USD";
const emailDomains: string = "yahoo.com"
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})

export class CompanyComponent implements OnInit {
  results: any = [];
  dataLoded: boolean = false;
  tokenRecieved: boolean = false;
  editCompanyData: any = {};
  updateIDForCompanyData: string = "";
//  Add Company Form Data Initialization started
  
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

  constructor(private dataServices: CompanyService, private toasterService: ToasterService) {
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

  editCompany(data: any) {
    this.updateIDForCompanyData = data.CompanyID;
        this.dataServices.getSingleData(data.CompanyID).subscribe(
        (editDataResponse: Response) => {
          this.editCompanyData = JSON.parse(editDataResponse.json()).Results[0];
          this.editCompanyName = this.editCompanyData.CompanyName;
          this.editCompanyCIN = this.editCompanyData.CompanyCIN;
          this.editAuthorizedSharedCapital = this.editCompanyData.AuthCapital;
          this.editPaidUpSharedCapital = this.editCompanyData.PaidupCapital;
          this.editCompanyISIN = this.editCompanyData.CompanyISIN;
          this.editSecurityName = this.editCompanyData.SecretaryName1;
          this.editCompanySecretaryName = this.editCompanyData.SecretaryName;
          this.editCompanySecretaryEmail = this.editCompanyData.SecretaryEmail;
          this.editCompanySecretaryNumber = this.editCompanyData.SecretaryPhone;
          this.editAdminName = this.editCompanyData.SysAdminName;
          this.editAdminEmail = this.editCompanyData.SysAdminEmail;
          this.editAdminNumber = this.editCompanyData.SysAdminPhone;
          this.editDepository = this.getObjectFromArray(this.editCompanyData.Depository, this.depository);
          this.editShareListing = this.getObjectFromArray(this.editCompanyData.SharesListed, this.shareListings);
          this.editStockExchange = "";
          this.editDematShareListing = this.getObjectFromArray(this.editCompanyData.SharesInDemat, this.shareListingsInDemat);
          this.editCompanyType = this.getObjectFromArray(this.editCompanyData.CompanyType, this.companyType);
          this.editStockExchange = "";
          this.editModal.show();
        },
        (editDataError: Response) => {
          console.info("Edit Data error is " + JSON.stringify(editDataError));
        }
    );
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
    this.updateIDForCompanyData = "";
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', 'abc@aaa.com');
    params.set('Password', 'A2bcdef;');
    params.set('grant_type', 'password');
    this.getAPIAccessToken(params);
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
          this.toasterService.pop('success', 'Company Listings Received');
          this.results = JSON.parse(serviceData.json()).Results;
          this.getAllCompanyTypes();
        },
        (serviceError) => {
          this.toasterService.pop('error', 'Company Listings Not Received');
        });
  }

}
