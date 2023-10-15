import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { PropertryComponent } from './one-way/propertry/propertry.component';
import { AttributeComponent } from './one-way/attribute/attribute.component';
import { EventComponent } from './one-way/event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TwoWayChildComponent } from './two-way-child/two-way-child.component';
import { InterpoChildComponent } from './interpo-child/interpo-child.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { MmkPipe } from './mmk.pipe';
import { LoggerDirective } from './logger.directive';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    OneWayComponent,
    TwoWayComponent,
    PropertryComponent,
    AttributeComponent,
    EventComponent,
    TwoWayChildComponent,
    InterpoChildComponent,
    FormGroupComponent,
    MmkPipe,
    LoggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
