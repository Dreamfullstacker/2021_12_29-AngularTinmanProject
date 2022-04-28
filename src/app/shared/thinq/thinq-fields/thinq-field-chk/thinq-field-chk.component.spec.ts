import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldChkComponent } from './thinq-field-chk.component';

describe('ThinqFieldChkComponent', () => {
  let component: ThinqFieldChkComponent;
  let fixture: ComponentFixture<ThinqFieldChkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldChkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
