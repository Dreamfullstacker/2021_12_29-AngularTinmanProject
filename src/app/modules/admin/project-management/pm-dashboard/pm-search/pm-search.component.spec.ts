import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMSearchComponent } from './pm-search.component';

describe('PMSearchComponent', () => {
  let component: PMSearchComponent;
  let fixture: ComponentFixture<PMSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
