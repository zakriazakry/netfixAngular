import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVsComponent } from './tvs.component';

describe('TVsComponent', () => {
  let component: TVsComponent;
  let fixture: ComponentFixture<TVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TVsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
