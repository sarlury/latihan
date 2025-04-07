import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficeSatuComponent } from './branch-office-satu.component';

describe('BranchOfficeSatuComponent', () => {
  let component: BranchOfficeSatuComponent;
  let fixture: ComponentFixture<BranchOfficeSatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchOfficeSatuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchOfficeSatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
