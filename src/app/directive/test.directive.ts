import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appTest]',
  standalone: true
})
export class TestDirective {

  constructor(private ref:ElementRef ) { }

  @HostListener("focus") onFouces() {
    console.log("focus");
  }
  @HostListener("blur") onBlur(){
    let value:HTMLElement = this.ref.nativeElement;
    this.ref.nativeElement = value.style.color = 'red';
  }
}
