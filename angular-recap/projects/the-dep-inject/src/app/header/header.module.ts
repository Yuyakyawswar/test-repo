import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
   // HeaderRoutingModule,
    RouterModule
  ],
  providers : [
    AppService
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
