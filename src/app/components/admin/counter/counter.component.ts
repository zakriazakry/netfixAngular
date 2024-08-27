import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-counter',
  standalone:true,
  template: `<span #counter>{{currentValue}}</span>`,
  styles: [`
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  `]
})
export class AnimatedCounterComponent implements OnChanges {
  @Input() value: number = 0;
  @Input() duration: number = 1000; // duration in milliseconds
  @Input() stepTime: number = 50; // time between updates in milliseconds

  @ViewChild('counter', { static: true }) counterElement!: ElementRef;

  currentValue: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.animateCount();
    }
  }

  animateCount() {
    const startValue = this.currentValue;
    const endValue = this.value;
    const range = endValue - startValue;
    const steps = this.duration / this.stepTime;
    const increment = range / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      this.currentValue = startValue + increment * currentStep;
      this.renderer.setProperty(this.counterElement.nativeElement, 'textContent', Math.round(this.currentValue));

      if (currentStep >= steps) {
        clearInterval(interval);
        this.currentValue = endValue;
        this.renderer.setProperty(this.counterElement.nativeElement, 'textContent', this.currentValue);
      }
    }, this.stepTime);
  }
}
