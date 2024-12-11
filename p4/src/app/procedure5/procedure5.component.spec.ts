import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure5Component } from './procedure5.component';

describe('Procedure5Component', () => {
  let component: Procedure5Component;
  let fixture: ComponentFixture<Procedure5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
