import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldDdlComponent } from './thinq-field-ddl.component';

describe('ThinqFieldDdlComponent', () => {
  let component: ThinqFieldDdlComponent;
  let fixture: ComponentFixture<ThinqFieldDdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldDdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
