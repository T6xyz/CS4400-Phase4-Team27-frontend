import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure17Component } from './procedure17.component';

describe('Procedure17Component', () => {
  let component: Procedure17Component;
  let fixture: ComponentFixture<Procedure17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
