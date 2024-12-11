import { TestBed } from '@angular/core/testing';

import { Procedure16Service } from './procedure16.service';

describe('Procedure16Service', () => {
  let service: Procedure16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
