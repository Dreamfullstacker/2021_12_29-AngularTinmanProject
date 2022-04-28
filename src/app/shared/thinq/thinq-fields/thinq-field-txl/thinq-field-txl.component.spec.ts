import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldTxlComponent } from './thinq-field-txl.component';

describe('ThinqFieldTxlComponent', () => {
  let component: ThinqFieldTxlComponent;
  let fixture: ComponentFixture<ThinqFieldTxlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldTxlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldTxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
