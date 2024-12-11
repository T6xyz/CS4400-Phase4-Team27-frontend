import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure7Component } from './procedure7.component';

describe('Procedure7Component', () => {
  let component: Procedure7Component;
  let fixture: ComponentFixture<Procedure7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
