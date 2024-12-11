import { TestBed } from '@angular/core/testing';

import { Procedure3Service } from './procedure3.service';

describe('Procedure3Service', () => {
  let service: Procedure3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
