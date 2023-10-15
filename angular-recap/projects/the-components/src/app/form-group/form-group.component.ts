import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent {

  @Input()
  label : string = ''

  @Input()
  valid : boolean | undefined = false

  @Input()
  margin : boolean = false

}
