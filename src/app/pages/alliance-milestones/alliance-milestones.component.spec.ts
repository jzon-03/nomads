import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceMilestonesComponent } from './alliance-milestones.component';

describe('AllianceMilestonesComponent', () => {
  let component: AllianceMilestonesComponent;
  let fixture: ComponentFixture<AllianceMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllianceMilestonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
