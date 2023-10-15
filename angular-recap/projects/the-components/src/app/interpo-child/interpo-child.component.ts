import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interpo-child',
  templateUrl: './interpo-child.component.html'
})
export class InterpoChildComponent {

  levels : ReadonlyArray<string> = ['Basic','Intermediate','Advance']

  form : FormGroup

  @Output()
  onCreate = new EventEmitter

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      name : ['' ,Validators.required],
      fees : ['0',[Validators.required,Validators.min(300_000)]],
      duration : ['0' , [Validators.required,Validators.min(2)]],
      level : ['',Validators.required],
    objectives : fb.array([
        fb.control('',Validators.required)
      ])
    })
  }

  get courseObjectives(){
    return this.form.get('objectives') as FormArray
  }
  
  addObjective(){
    this.courseObjectives.push(this.fb.control('',Validators.required))
  }

  removeObjective(index : number){
    this.courseObjectives.removeAt(index)
  }

  create(){
    if(this.form.valid)
    this.onCreate.emit(this.form.value)
  }

}
