import { TestBed } from '@angular/core/testing';

import { Procedure12Service } from './procedure12.service';

describe('Procedure12Service', () => {
  let service: Procedure12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
