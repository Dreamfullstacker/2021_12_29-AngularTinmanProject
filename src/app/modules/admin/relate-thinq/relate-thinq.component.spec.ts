import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateThinqComponent } from './relate-thinq.component';

describe('RelateThinqComponent', () => {
  let component: RelateThinqComponent;
  let fixture: ComponentFixture<RelateThinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelateThinqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelateThinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
