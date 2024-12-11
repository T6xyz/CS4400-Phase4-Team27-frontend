import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure8Component } from './procedure8.component';

describe('Procedure8Component', () => {
  let component: Procedure8Component;
  let fixture: ComponentFixture<Procedure8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
