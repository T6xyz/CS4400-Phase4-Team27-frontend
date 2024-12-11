import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure4Component } from './procedure4.component';

describe('Procedure4Component', () => {
  let component: Procedure4Component;
  let fixture: ComponentFixture<Procedure4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
