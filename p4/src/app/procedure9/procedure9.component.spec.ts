import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure9Component } from './procedure9.component';

describe('Procedure9Component', () => {
  let component: Procedure9Component;
  let fixture: ComponentFixture<Procedure9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
