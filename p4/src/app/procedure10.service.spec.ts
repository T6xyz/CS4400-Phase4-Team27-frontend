import { TestBed } from '@angular/core/testing';

import { Procedure10Service } from './procedure10.service';

describe('Procedure10Service', () => {
  let service: Procedure10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
