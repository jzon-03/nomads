import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitaniumAlloyCalcComponent } from './titanium-alloy-calc.component';

describe('TitaniumAlloyCalcComponent', () => {
  let component: TitaniumAlloyCalcComponent;
  let fixture: ComponentFixture<TitaniumAlloyCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitaniumAlloyCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitaniumAlloyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
