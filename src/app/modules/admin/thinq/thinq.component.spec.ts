import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqComponent } from './thinq.component';

describe('ThinqComponent', () => {
  let component: ThinqComponent;
  let fixture: ComponentFixture<ThinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
