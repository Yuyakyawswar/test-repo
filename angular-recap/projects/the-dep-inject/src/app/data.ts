
export class Animal{
    food : any
    constructor(foods: any){
        this.food  = foods
    }
    eat() : string{
     return `Animal eat ${this.food.name}`;
    }
  }
  
  export class Dog{
    eat() : string{
        return 'Dog eat';
       }
  }

  export class Food{
    name :string
    type: 'Meat' | 'Vegetable'
    weight : number

    constructor(){
        this.name = 'Bacon'
        this.type = 'Meat'
        this.weight = 0.5
    }
  }

