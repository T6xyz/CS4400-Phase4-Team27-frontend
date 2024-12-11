import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure20Component } from './procedure20.component';

describe('Procedure20Component', () => {
  let component: Procedure20Component;
  let fixture: ComponentFixture<Procedure20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
