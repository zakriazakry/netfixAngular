import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuShower]', standalone: true
})
export class MenuShowerDirective {
  @Input({ required: true }) excludedClass: string = 'non-out';

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this.el.nativeElement.contains(event.target) || this.isClickOnProfilePicture(event.target);
    console.log(this.isClickOnProfilePicture(event.target));

    if (!clickedInside) {
      this.hideMenu();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
  }

  private hideMenu() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

  private showMenu() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }
  private isClickOnProfilePicture(targetElement: any): boolean {
    if (targetElement.classList.contains(this.excludedClass)) {
      return true;
    }
    let parentElement = targetElement.parentElement;
    while (parentElement) {
      if (parentElement.classList.contains(this.excludedClass)) {
        return true;
      }
      parentElement = parentElement.parentElement;
    }
    return false;
  }
}
