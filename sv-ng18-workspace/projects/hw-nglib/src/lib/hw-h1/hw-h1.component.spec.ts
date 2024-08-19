import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwH1Component } from './hw-h1.component';

describe('HwH1Component', () => {
  let component: HwH1Component;
  let fixture: ComponentFixture<HwH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HwH1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
