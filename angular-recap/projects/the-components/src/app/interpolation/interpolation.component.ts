import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {

   ope : any

   text : string = 'Hello text Interpolation';
   imageTitle :string  = "image.jpg"; 
   num : number = 100

  childData : any

  createData(data :any){
   
    this.childData = data
  }
}
