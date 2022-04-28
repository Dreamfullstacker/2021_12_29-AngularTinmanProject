import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMCountcardContainerComponent } from './pm-countcard-container.component';

describe('PMCountcardContainerComponent', () => {
  let component: PMCountcardContainerComponent;
  let fixture: ComponentFixture<PMCountcardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMCountcardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMCountcardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
