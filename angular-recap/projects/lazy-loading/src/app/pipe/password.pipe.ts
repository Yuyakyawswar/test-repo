import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string): unknown {
    let star : string = ''
    for(let i = 0; i <value.length ; i++){
      star += '*'
    }
    return star;
  }

}
