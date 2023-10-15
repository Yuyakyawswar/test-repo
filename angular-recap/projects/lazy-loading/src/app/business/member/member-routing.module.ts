import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberOneComponent } from './member-one/member-one.component';
import { MemberTwoComponent } from './member-two/member-two.component';
import { MemberComponent } from './member.component';


const routes: Routes = [
  { path: '', component: MemberComponent, children: [
    { path: 'member-one', component: MemberOneComponent, title: 'Member One'
},
    { path: 'member-two', component: MemberTwoComponent, title: 'Member Two'
       },
    { path: '', redirectTo: '/member/member-one', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
