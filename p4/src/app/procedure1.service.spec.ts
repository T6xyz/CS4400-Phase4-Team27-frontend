import { TestBed } from '@angular/core/testing';

import { Procedure1Service } from './procedure1.service';

describe('Procedure1Service', () => {
  let service: Procedure1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
