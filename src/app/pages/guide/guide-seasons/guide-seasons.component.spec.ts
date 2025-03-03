import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSeasonsComponent } from './guide-seasons.component';

describe('GuideSeasonsComponent', () => {
  let component: GuideSeasonsComponent;
  let fixture: ComponentFixture<GuideSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuideSeasonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
