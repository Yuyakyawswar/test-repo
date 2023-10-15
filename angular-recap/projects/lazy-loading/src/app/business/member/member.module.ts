import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberOneComponent } from './member-one/member-one.component';
import { MemberTwoComponent } from './member-two/member-two.component';


@NgModule({
  declarations: [
    MemberComponent,
    MemberOneComponent,
    MemberTwoComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
