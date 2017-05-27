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
    SchemedoosierComponent,
    NumberTodatePipe,
    NumberTomonthPipe,
    NumberToyearPipe,
    CompanyDepartmentComponent,
    ObjNgForValue
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
