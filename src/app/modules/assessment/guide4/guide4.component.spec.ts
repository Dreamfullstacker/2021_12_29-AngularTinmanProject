import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guide4Component } from './guide4.component';

describe('Guide2Component', () => {
  let component: Guide4Component;
  let fixture: ComponentFixture<Guide4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Guide4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Guide4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
