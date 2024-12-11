import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure18Component } from './procedure18.component';

describe('Procedure18Component', () => {
  let component: Procedure18Component;
  let fixture: ComponentFixture<Procedure18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
