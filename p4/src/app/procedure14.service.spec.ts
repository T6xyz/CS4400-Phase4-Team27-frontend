import { TestBed } from '@angular/core/testing';

import { Procedure14Service } from './procedure14.service';

describe('Procedure14Service', () => {
  let service: Procedure14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
