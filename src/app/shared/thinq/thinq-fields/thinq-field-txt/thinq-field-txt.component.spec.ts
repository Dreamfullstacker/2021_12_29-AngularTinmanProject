import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldTxtComponent } from './thinq-field-txt.component';

describe('ThinqFieldTxtComponent', () => {
  let component: ThinqFieldTxtComponent;
  let fixture: ComponentFixture<ThinqFieldTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldTxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
