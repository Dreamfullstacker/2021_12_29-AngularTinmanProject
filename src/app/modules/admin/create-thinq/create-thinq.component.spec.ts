import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThinqComponent } from './create-thinq.component';

describe('CreateThinqComponent', () => {
  let component: CreateThinqComponent;
  let fixture: ComponentFixture<CreateThinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThinqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
