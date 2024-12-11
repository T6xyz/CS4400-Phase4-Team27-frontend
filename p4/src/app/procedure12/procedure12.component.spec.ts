import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure12Component } from './procedure12.component';

describe('Procedure12Component', () => {
  let component: Procedure12Component;
  let fixture: ComponentFixture<Procedure12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
