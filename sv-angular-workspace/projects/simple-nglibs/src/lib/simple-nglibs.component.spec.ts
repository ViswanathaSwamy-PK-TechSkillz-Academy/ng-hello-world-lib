import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNglibsComponent } from './simple-nglibs.component';

describe('SimpleNglibsComponent', () => {
  let component: SimpleNglibsComponent;
  let fixture: ComponentFixture<SimpleNglibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNglibsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNglibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
