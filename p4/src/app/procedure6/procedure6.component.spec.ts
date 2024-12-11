import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure6Component } from './procedure6.component';

describe('Procedure6Component', () => {
  let component: Procedure6Component;
  let fixture: ComponentFixture<Procedure6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
