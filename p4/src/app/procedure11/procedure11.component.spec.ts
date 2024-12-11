import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure11Component } from './procedure11.component';

describe('Procedure11Component', () => {
  let component: Procedure11Component;
  let fixture: ComponentFixture<Procedure11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
