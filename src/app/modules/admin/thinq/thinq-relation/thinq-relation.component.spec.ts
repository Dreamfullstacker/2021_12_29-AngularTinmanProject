import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqRelationComponent } from './thinq-relation.component';

describe('ThinqRelationComponent', () => {
  let component: ThinqRelationComponent;
  let fixture: ComponentFixture<ThinqRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
