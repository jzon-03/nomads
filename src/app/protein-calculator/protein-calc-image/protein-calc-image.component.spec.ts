import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinCalcImageComponent } from './protein-calc-image.component';

describe('ProteinCalcImageComponent', () => {
  let component: ProteinCalcImageComponent;
  let fixture: ComponentFixture<ProteinCalcImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProteinCalcImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinCalcImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
