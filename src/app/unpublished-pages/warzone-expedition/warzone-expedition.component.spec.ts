import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarzoneExpeditionComponent } from './warzone-expedition.component';

describe('WarzoneExpeditionComponent', () => {
  let component: WarzoneExpeditionComponent;
  let fixture: ComponentFixture<WarzoneExpeditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarzoneExpeditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarzoneExpeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
