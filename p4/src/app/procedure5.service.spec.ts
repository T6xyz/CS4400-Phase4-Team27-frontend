import { TestBed } from '@angular/core/testing';

import { Procedure5Service } from './procedure5.service';

describe('Procedure5Service', () => {
  let service: Procedure5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
