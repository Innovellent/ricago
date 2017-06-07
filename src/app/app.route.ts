import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CompanyGradeComponent } from './company-grade/company-grade.component';
import { CompanyComponent } from './company/company1.component';;

import { SchemedoosierComponent } from './schemedoosier/schemedoosier.component';

import { CompanyDepartmentComponent } from './company-department/company-department.component';
export const AppRoutes:Routes = [

{ path: '', component: CompanyGradeComponent },

{ path: 'company_grade', component: CompanyGradeComponent },

{ path: 'company_details', component: CompanyComponent },
{ path: 'SchemeDoosire', component: SchemedoosierComponent },
{ path: 'Company_department', component: CompanyDepartmentComponent },
];
