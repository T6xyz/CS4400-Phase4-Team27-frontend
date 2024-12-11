import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure21Component } from './procedure21.component';

describe('Procedure21Component', () => {
  let component: Procedure21Component;
  let fixture: ComponentFixture<Procedure21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
