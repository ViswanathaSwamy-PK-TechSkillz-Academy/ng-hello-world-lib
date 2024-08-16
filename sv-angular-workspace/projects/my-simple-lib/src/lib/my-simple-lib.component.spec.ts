import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySimpleLibComponent } from './my-simple-lib.component';

describe('MySimpleLibComponent', () => {
  let component: MySimpleLibComponent;
  let fixture: ComponentFixture<MySimpleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySimpleLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySimpleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
