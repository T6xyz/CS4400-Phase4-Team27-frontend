import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure10Component } from './procedure10.component';

describe('Procedure10Component', () => {
  let component: Procedure10Component;
  let fixture: ComponentFixture<Procedure10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
