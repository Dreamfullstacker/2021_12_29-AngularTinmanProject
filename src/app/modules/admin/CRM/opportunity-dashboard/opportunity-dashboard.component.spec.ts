import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDashboardComponent } from './opportunity-dashboard.component';

describe('OpportunityDashboardComponent', () => {
  let component: OpportunityDashboardComponent;
  let fixture: ComponentFixture<OpportunityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
