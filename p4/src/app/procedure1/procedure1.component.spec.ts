import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure1Component } from './procedure1.component';

describe('Procedure1Component', () => {
  let component: Procedure1Component;
  let fixture: ComponentFixture<Procedure1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
