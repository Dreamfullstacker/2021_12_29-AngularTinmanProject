import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetHeaderComponent } from './cabinet-header.component';

describe('CabinetHeaderComponent', () => {
  let component: CabinetHeaderComponent;
  let fixture: ComponentFixture<CabinetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
