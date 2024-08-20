import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesesComponent } from './serieses.component';

describe('SeriesesComponent', () => {
  let component: SeriesesComponent;
  let fixture: ComponentFixture<SeriesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
