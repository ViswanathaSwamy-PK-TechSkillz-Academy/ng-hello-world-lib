import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworldH1Component } from './helloworld-h1.component';

describe('HelloworldH1Component', () => {
  let component: HelloworldH1Component;
  let fixture: ComponentFixture<HelloworldH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloworldH1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloworldH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
