import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure14Component } from './procedure14.component';

describe('Procedure14Component', () => {
  let component: Procedure14Component;
  let fixture: ComponentFixture<Procedure14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
