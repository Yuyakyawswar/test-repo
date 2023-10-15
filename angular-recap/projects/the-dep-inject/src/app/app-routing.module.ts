import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodOneComponent } from './core/method-one/method-one.component';
import { MethodTwoComponent } from './core/method-two/method-two.component';
import { MethodThreeComponent } from './core/method-three/method-three.component';

const routes: Routes = [
  {
    path: 'method-one' ,component : MethodOneComponent
  },
  {
    path: 'method-two' ,component : MethodTwoComponent
  },
  {
    path: 'method-three' ,component : MethodThreeComponent
  },
  {
    path: '' ,redirectTo: '/method-one', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
