import { TestBed } from '@angular/core/testing';

import { View5Service } from './view5.service';

describe('View5Service', () => {
  let service: View5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
