import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldToggleComponent } from './thinq-field-toggle.component';

describe('ThinqFieldToggleComponent', () => {
  let component: ThinqFieldToggleComponent;
  let fixture: ComponentFixture<ThinqFieldToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
