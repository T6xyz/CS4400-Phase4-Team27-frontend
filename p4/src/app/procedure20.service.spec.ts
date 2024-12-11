import { TestBed } from '@angular/core/testing';

import { Procedure20Service } from './procedure20.service';

describe('Procedure20Service', () => {
  let service: Procedure20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
