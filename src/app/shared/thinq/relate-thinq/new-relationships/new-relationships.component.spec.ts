import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRelationshipsComponent } from './new-relationships.component';

describe('NewRelationshipsComponent', () => {
  let component: NewRelationshipsComponent;
  let fixture: ComponentFixture<NewRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
