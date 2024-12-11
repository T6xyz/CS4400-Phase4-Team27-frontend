import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure19Component } from './procedure19.component';

describe('Procedure19Component', () => {
  let component: Procedure19Component;
  let fixture: ComponentFixture<Procedure19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
