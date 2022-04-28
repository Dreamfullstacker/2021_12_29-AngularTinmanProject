import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetIconComponent } from './cabinet-icon.component';

describe('CabinetIconComponent', () => {
  let component: CabinetIconComponent;
  let fixture: ComponentFixture<CabinetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
