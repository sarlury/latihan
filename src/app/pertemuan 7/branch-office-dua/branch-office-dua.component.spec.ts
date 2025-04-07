import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficeDuaComponent } from './branch-office-dua.component';

describe('BranchOfficeDuaComponent', () => {
  let component: BranchOfficeDuaComponent;
  let fixture: ComponentFixture<BranchOfficeDuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchOfficeDuaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchOfficeDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
