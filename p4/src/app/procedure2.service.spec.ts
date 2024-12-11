import { TestBed } from '@angular/core/testing';

import { Procedure2Service } from './procedure2.service';

describe('Procedure2Service', () => {
  let service: Procedure2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
