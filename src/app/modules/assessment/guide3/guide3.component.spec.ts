import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guide3Component } from './guide3.component';

describe('Guide2Component', () => {
  let component: Guide3Component;
  let fixture: ComponentFixture<Guide3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Guide3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Guide3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
