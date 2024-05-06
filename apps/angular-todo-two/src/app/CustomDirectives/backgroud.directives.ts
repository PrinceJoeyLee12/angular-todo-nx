import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setBackGround]',
})
export class SetBackgroundDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'green';
  }
}
