import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MethodOneComponent } from './method-one/method-one.component';
import { MethodTwoComponent } from './method-two/method-two.component';
import { MethodThreeComponent } from './method-three/method-three.component';
import { AppService } from '../app.service';


@NgModule({
  declarations: [
    CoreComponent,
    MethodOneComponent,
    MethodTwoComponent,
    MethodThreeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  // providers : [
  //   AppService
  // ],
  exports: [
    MethodOneComponent,
    MethodTwoComponent,
    MethodThreeComponent
  ]
})
export class CoreModule { }
