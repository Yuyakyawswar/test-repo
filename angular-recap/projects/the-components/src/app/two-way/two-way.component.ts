import { group } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html'
})
export class TwoWayComponent implements OnChanges,OnInit,DoCheck,
                                        AfterContentInit,AfterContentChecked,
                                        AfterViewInit,AfterViewChecked,
                                        OnDestroy{
                                        

  inputOne = ''

  inputTwo = ''

  data : any
  form  : FormGroup

  constructor(fb: FormBuilder){
    this.log('constructor')
    this.form = fb.group({
      name : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      phone : ['',Validators.required],
      gender : ['Male',Validators.required],

    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      this.log('ngOnChanges')
  }
  
  ngOnInit(): void {
      this.log('ngonInit')
  }
  ngDoCheck(): void {
      this.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
      this.log('AfterContentInit')
  }

  ngAfterContentChecked(): void {
      this.log('AfterContentCheck')
  }
  ngAfterViewInit(): void {
      this.log('AfterViewInit')
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewCheck')
  }

  ngOnDestroy(): void {
      this.log('OnDestory')
  }

  createData(){
    
   this.data = this.form.value
   this.initForm()
    }
    
    initForm(){
      this.form.patchValue({
        name : '',
        email : '',
        phone : '',
        gender : 'Male'
      })
    }

    private log(message: string) {
      console.log(`Parent ${message} called`)
    }
  }


