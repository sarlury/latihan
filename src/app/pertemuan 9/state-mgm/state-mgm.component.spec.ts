import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMgmComponent } from './state-mgm.component';

describe('StateMgmComponent', () => {
  let component: StateMgmComponent;
  let fixture: ComponentFixture<StateMgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateMgmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateMgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
