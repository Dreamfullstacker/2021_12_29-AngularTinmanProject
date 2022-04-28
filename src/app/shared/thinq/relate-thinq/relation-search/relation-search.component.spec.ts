import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationSearchComponent } from './relation-search.component';

describe('RelationSearchComponent', () => {
  let component: RelationSearchComponent;
  let fixture: ComponentFixture<RelationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
