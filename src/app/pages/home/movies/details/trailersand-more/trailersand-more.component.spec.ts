import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRAILERSandMOREComponent } from './trailersand-more.component';

describe('TRAILERSandMOREComponent', () => {
  let component: TRAILERSandMOREComponent;
  let fixture: ComponentFixture<TRAILERSandMOREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TRAILERSandMOREComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TRAILERSandMOREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
