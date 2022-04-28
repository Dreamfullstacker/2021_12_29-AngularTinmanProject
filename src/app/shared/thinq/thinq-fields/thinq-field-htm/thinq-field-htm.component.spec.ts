import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldHtmComponent } from './thinq-field-htm.component';

describe('ThinqFieldHtmComponent', () => {
  let component: ThinqFieldHtmComponent;
  let fixture: ComponentFixture<ThinqFieldHtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldHtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldHtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
