import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure2Component } from './procedure2.component';

describe('Procedure2Component', () => {
  let component: Procedure2Component;
  let fixture: ComponentFixture<Procedure2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
