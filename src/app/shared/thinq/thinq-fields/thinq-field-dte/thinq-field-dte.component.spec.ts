import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldDteComponent } from './thinq-field-dte.component';

describe('ThinqFieldDteComponent', () => {
  let component: ThinqFieldDteComponent;
  let fixture: ComponentFixture<ThinqFieldDteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldDteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldDteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
