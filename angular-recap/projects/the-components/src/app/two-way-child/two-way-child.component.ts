import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-two-way-child',
  templateUrl: './two-way-child.component.html'
})
export class TwoWayChildComponent implements OnChanges,OnInit,DoCheck,
                                            AfterContentInit,AfterContentChecked,
                                            AfterViewInit,AfterViewChecked,
                                            OnDestroy{

  @Input()
  parentInput : any

  constructor(){
    this.log('constructor')

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      this.log('ngOnChanges')
  }

  ngOnInit(): void {
      this.log('ngOnInit  ')
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

  private log(message: string) {
    console.log(`Child ${message} called`)
  }

}
