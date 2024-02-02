import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { BeneficiaryManagementComponent } from './beneficiary-management/beneficiary-management.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { AccountApprovalComponent } from './account-approval/account-approval.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    AccountManagementComponent,
    BeneficiaryManagementComponent,
    TransactionComponent,
    ProfileUpdateComponent,
    ForgotPasswordComponent,
    StaffManagementComponent,
    AccountApprovalComponent,
    CustomerManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
