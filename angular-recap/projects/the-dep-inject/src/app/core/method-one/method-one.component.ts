import { Component, Inject, InjectionToken } from '@angular/core';
import { AppService } from '../../app.service';


const LOCALE = new InjectionToken ('locale')

@Component({
  selector: 'app-method-one',
  templateUrl: './method-one.component.html',
  providers : [
    {provide : LOCALE, useValue : 'en-US',multi : true},
    {provide : LOCALE, useValue : 'my-MM',multi : true},
    {provide : LOCALE, useValue : 'ja-JP',multi : true}
  ]
  
})
export class MethodOneComponent {

  message :any
  constructor(
    @Inject(LOCALE) locale :string
  ){
    this.message = locale
  }

}
