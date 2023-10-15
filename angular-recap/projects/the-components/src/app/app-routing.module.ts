import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayComponent } from './one-way/one-way.component';
import { PropertryComponent } from './one-way/propertry/propertry.component';
import { AttributeComponent } from './one-way/attribute/attribute.component';
import { EventComponent } from './one-way/event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {
    path: 'interpolation', component: InterpolationComponent,
    title: 'Interpolation'
  },

  {
    path: 'one-way' ,component: OneWayComponent, children : [
      { path : 'property' , component: PropertryComponent , title : 'One way |Property'},
      { path :  'attribute', component: AttributeComponent, title : 'One way |Attribute'},
      { path :  'event', component: EventComponent, title : 'One way |Event'},
      { path : '', redirectTo: '/one-way/property',pathMatch: 'full'}
    ]
  },

  {
    path : 'two-way', component: TwoWayComponent, title: 'Two Way'
  },
  
  {
    path: '', redirectTo: '/interpolation', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
