import { TestBed } from '@angular/core/testing';

import { Procedure11Service } from './procedure11.service';

describe('Procedure11Service', () => {
  let service: Procedure11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
