import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CompanyGradeComponent } from './company-grade/company-grade.component';
import { CompanyComponent } from './company/company1.component';;

import { SchemedoosierComponent } from './schemedoosier/schemedoosier.component';

import { CompanyDepartmentComponent } from './company-department/company-department.component';

import { LocationComponent } from './location/location.component';
import { CompanyDesignationComponent } from './company-designation/company-designation.component';
import { CompanyDivisionComponent } from './company-division/company-division.component';
import { CompanyBankComponent } from './company-bank/company-bank.component';
import { CompanyRoleComponent } from './company-role/company-role.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserComponent } from './user/user.component';

export const AppRoutes:Routes = [

{ path: '', component: CompanyGradeComponent },

{ path: 'company_grade', component: CompanyGradeComponent },

{ path: 'company_details', component: CompanyComponent },
{ path: 'SchemeDoosire', component: SchemedoosierComponent },
{ path: 'company_department', component: CompanyDepartmentComponent },
{ path: 'location', component: LocationComponent },
{ path: 'company_designation', component: CompanyDesignationComponent },

{ path: 'company_division', component: CompanyDivisionComponent },

{ path: 'company_bank', component: CompanyBankComponent },

{ path: 'company_role', component: CompanyRoleComponent },

{ path: 'company', component: CompanyDetailsComponent },

{ path: 'user', component: UserComponent },
];
