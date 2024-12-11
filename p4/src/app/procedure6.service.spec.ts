import { TestBed } from '@angular/core/testing';

import { Procedure6Service } from './procedure6.service';

describe('Procedure6Service', () => {
  let service: Procedure6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
