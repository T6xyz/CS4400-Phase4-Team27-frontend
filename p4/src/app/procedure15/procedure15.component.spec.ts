import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procedure15Component } from './procedure15.component';

describe('Procedure15Component', () => {
  let component: Procedure15Component;
  let fixture: ComponentFixture<Procedure15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procedure15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Procedure15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
