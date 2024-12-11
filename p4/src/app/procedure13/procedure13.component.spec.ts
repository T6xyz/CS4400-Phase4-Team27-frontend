import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure13Component } from './procedure13.component';

describe('Procedure13Component', () => {
  let component: Procedure13Component;
  let fixture: ComponentFixture<Procedure13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
