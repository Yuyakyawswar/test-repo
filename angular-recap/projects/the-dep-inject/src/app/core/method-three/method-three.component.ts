import { Component } from '@angular/core';
import { Animal, Dog, Food } from '../../data';

@Component({
  selector: 'app-method-three',
  templateUrl: './method-three.component.html',
  providers: [
    Food,
     {provide : Animal , deps : [Food]}
  ]
})
export class MethodThreeComponent {

  message : any

  constructor(animal : Animal){
    this.message = animal.eat()
  }

}

