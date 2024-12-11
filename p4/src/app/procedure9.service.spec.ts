import { TestBed } from '@angular/core/testing';

import { Procedure9Service } from './procedure9.service';

describe('Procedure9Service', () => {
  let service: Procedure9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
