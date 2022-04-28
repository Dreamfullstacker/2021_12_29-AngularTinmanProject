import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMDashboardComponent } from './pm-dashboard.component';

describe('PMDashboardComponent', () => {
  let component: PMDashboardComponent;
  let fixture: ComponentFixture<PMDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
