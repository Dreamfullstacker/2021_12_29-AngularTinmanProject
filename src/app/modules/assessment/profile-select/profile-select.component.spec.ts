import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSelectComponent } from './profile-select.component';

describe('ProfileSelectComponent', () => {
    let component: ProfileSelectComponent;
    let fixture: ComponentFixture<ProfileSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileSelectComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
