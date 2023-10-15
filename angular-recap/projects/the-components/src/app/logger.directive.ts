import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[logger]'
})
export class LoggerDirective {

  @Input()
  color: string = ''

  constructor(private ref: ElementRef) { }

  @HostListener('mouseenter')
  onFocus(){
    this.ref.nativeElement.classList.add(this.color || 'bg-secondary')
  }

  @HostListener('mouseleave')
  onLeave(){
    this.ref.nativeElement.classList.remove(this.color || 'bg-secondary')
  }

}
