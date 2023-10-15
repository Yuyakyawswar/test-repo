import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html'
})
export class AttributeComponent {

  srcValue : any = "assets/image.png"

  nowValue = 20;
  minValue = 0;
  maxValue = 100

  // showValue(val : any){
  //   this.nowValue  = val.value
  // }

}


