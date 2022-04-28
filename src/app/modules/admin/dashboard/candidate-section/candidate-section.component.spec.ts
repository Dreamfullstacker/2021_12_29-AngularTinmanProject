import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSectionComponent } from './candidate-section.component';

describe('CandidateSectionComponent', () => {
  let component: CandidateSectionComponent;
  let fixture: ComponentFixture<CandidateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
