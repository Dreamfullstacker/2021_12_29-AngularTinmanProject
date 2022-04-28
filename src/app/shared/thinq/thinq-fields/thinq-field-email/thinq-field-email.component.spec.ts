import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinqFieldEmailComponent } from './thinq-field-email.component';

describe('ThinqFieldEmailComponent', () => {
  let component: ThinqFieldEmailComponent;
  let fixture: ComponentFixture<ThinqFieldEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinqFieldEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinqFieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
