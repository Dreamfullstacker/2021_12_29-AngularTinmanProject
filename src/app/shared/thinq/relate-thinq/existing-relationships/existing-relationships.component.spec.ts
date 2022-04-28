import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRelationshipsComponent } from './existing-relationships.component';

describe('ExistingRelationshipsComponent', () => {
  let component: ExistingRelationshipsComponent;
  let fixture: ComponentFixture<ExistingRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
