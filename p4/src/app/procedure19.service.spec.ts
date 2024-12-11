import { TestBed } from '@angular/core/testing';

import { Procedure19Service } from './procedure19.service';

describe('Procedure19Service', () => {
  let service: Procedure19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Procedure19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
