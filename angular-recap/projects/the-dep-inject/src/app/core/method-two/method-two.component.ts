import { Component, Inject } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-method-two',
  templateUrl: './method-two.component.html',
  providers: [
    {
      provide: 'name', useValue : 'JDC'
    },
    {
      provide : 'year' ,useValue :  2014
    },
    {
      provide : 'location' , useValue : 'Yangon'
    }
  ]
})
export class MethodTwoComponent {

  message :any
  constructor(
    @Inject('name')name : string,
    @Inject('year')year : number,
    @Inject('location')location : string

    ){
      this.message = {name,year,location}
  }

}
