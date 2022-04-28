import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldTxaComponent } from './thinq-field-txa.component';

describe('ThinqFieldTxaComponent', () => {
  let component: ThinqFieldTxaComponent;
  let fixture: ComponentFixture<ThinqFieldTxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldTxaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldTxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
