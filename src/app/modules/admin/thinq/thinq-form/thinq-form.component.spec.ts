import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFormComponent } from './thinq-form.component';

describe('ThinqFormComponent', () => {
  let component: ThinqFormComponent;
  let fixture: ComponentFixture<ThinqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
