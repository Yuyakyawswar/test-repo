import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminOneComponent } from './admin-one/admin-one.component';
import { AdminTwoComponent } from './admin-two/admin-two.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PaymentDetailComponent } from './admin-two/payment-detail/payment-detail.component';


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'admin-one', component: AdminOneComponent,
                   title: 'Admin One' },
    {
      path: 'users/detail/:email',component:UserDetailComponent, title :'User Detail'
    },
    { path: 'admin-two', component: AdminTwoComponent, 
                   title: 'Admin Two',children : [{
                    path: 'payments/detail',component:PaymentDetailComponent, title: 'Payment Detail'
                   }]},
    { path: '', redirectTo: '/admin/admin-one', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
