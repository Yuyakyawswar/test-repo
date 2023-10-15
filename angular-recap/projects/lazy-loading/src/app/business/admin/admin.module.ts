import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminOneComponent } from './admin-one/admin-one.component';
import { AdminTwoComponent } from './admin-two/admin-two.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PasswordPipe } from '../../pipe/password.pipe';
import { PaymentDetailComponent } from './admin-two/payment-detail/payment-detail.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminOneComponent,
    AdminTwoComponent,
    UserDetailComponent,
    PasswordPipe,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
