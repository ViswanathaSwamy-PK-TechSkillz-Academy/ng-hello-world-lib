import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwNglibComponent } from './hw-nglib.component';

describe('HwNglibComponent', () => {
  let component: HwNglibComponent;
  let fixture: ComponentFixture<HwNglibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HwNglibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HwNglibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
