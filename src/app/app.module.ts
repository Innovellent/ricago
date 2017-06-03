import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompanyGradeComponent } from './company-grade/company-grade.component';
import { CompanyComponent } from './company/company1.component';
import { ObjNgFor } from './company/company1.component';
import { ObjNgForNew } from './company/company1.component';
import { ObjNgForValues } from './company/company1.component';
import { ObjNgFor1 } from './company-details/company-details.component';
import { ObjNgForNew1 } from './company-details/company-details.component';
import {ModalModule} from 'ng2-bootstrap/modal';
import { KeyPipesPipe } from './key-pipes.pipe';
import { WhitelabelkeyPipe } from './whitelabelkey.pipe';
import { MapFromKeyValuePipe } from './company/map-from-key-value.pipe';
import { SchemedoosierComponent } from './schemedoosier/schemedoosier.component';
import { NumberTodatePipe } from './schemedoosier/number-todate.pipe';
import { NumberTomonthPipe } from './schemedoosier/number-tomonth.pipe';
import { NumberToyearPipe } from './schemedoosier/number-toyear.pipe';
import { CompanyDepartmentComponent } from './company-department/company-department.component';
import { ObjNgForValue } from './schemedoosier/schemedoosier.component';
import { LocationComponent } from './location/location.component';
import { CompanyDesignationComponent } from './company-designation/company-designation.component';
import { CompanyDivisionComponent } from './company-division/company-division.component';
import { CompanyBankComponent } from './company-bank/company-bank.component';
import { CompanyRoleComponent } from './company-role/company-role.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserComponent } from './user/user.component';
import { ManageGranteeComponent } from './manage-grantee/manage-grantee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CompanyGradeComponent,
    CompanyComponent,
    KeyPipesPipe,
    WhitelabelkeyPipe,
    MapFromKeyValuePipe,
    ObjNgFor,
    ObjNgForNew,
    ObjNgForValues,
    ObjNgFor1,
    ObjNgForNew1,
    SchemedoosierComponent,
    NumberTodatePipe,
    NumberTomonthPipe,
    NumberToyearPipe,
    CompanyDepartmentComponent,
    ObjNgForValue,
    LocationComponent,
    CompanyDesignationComponent,
    CompanyDivisionComponent,
    CompanyBankComponent,
    CompanyRoleComponent,
    CompanyDetailsComponent,
    UserComponent,
    ManageGranteeComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
     LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
