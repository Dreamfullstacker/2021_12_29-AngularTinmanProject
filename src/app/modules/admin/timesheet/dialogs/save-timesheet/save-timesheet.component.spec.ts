import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTimesheetComponent } from './save-timesheet.component';

describe('SaveTimesheetComponent', () => {
  let component: SaveTimesheetComponent;
  let fixture: ComponentFixture<SaveTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
