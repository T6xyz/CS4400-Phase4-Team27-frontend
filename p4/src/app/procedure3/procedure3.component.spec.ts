import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure3Component } from './procedure3.component';

describe('Procedure3Component', () => {
  let component: Procedure3Component;
  let fixture: ComponentFixture<Procedure3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
