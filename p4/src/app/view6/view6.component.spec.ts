import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View6Component } from './view6.component';

describe('View6Component', () => {
  let component: View6Component;
  let fixture: ComponentFixture<View6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
