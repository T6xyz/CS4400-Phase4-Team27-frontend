import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View5Component } from './view5.component';

describe('View5Component', () => {
  let component: View5Component;
  let fixture: ComponentFixture<View5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
