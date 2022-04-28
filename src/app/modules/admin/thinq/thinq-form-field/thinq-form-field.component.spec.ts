import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFormfieldComponent } from './thinq-form-field.component';

describe('BaseformComponent', () => {
  let component: ThinqFormfieldComponent;
  let fixture: ComponentFixture<ThinqFormfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFormfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFormfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
