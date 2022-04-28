import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassGroupComponent } from './class-group.component';

describe('ClassGroupComponent', () => {
  let component: ClassGroupComponent;
  let fixture: ComponentFixture<ClassGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
