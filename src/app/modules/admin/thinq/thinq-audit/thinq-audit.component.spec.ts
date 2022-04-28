import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqAuditComponent } from './thinq-audit.component';

describe('ThinqAuditComponent', () => {
  let component: ThinqAuditComponent;
  let fixture: ComponentFixture<ThinqAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
