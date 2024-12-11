import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure16Component } from './procedure16.component';

describe('Procedure16Component', () => {
  let component: Procedure16Component;
  let fixture: ComponentFixture<Procedure16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
