import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMTaskCardComponent } from './pm-task-card.component';

describe('PMTaskCardComponent', () => {
  let component: PMTaskCardComponent;
  let fixture: ComponentFixture<PMTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
