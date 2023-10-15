import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mmk'
})
export class MmkPipe implements PipeTransform {

  transform(value: number | string | null, params?: 'left' | 'right'):any {
  
    if(value){
      if(typeof value == 'string'){
        let data = +value.split(',').join("");
        return this.getResult(data,params)
      }
      return this.getResult(value,params)
    }
    return '';
    
  }

  private getResult(value: number, params:string  | undefined){
    if(!params) 
       return `${value}MMK`
    return params && params == 'left' ? `MMK ${value}` : `${value} MMK`;
  }

}
