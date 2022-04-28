import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateJobComponent } from './candidate-job.component';

describe('CandidateJobComponent', () => {
  let component: CandidateJobComponent;
  let fixture: ComponentFixture<CandidateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
