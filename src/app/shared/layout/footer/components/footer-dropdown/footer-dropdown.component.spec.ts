import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDropdownComponent } from './footer-dropdown.component';

describe('FooterDropdownComponent', () => {
  let component: FooterDropdownComponent;
  let fixture: ComponentFixture<FooterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
