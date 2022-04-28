import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMSideScreenComponent } from './pm-side-screen.component';

describe('PMSideScreenComponent', () => {
  let component: PMSideScreenComponent;
  let fixture: ComponentFixture<PMSideScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMSideScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMSideScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
