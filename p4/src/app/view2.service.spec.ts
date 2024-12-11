import { TestBed } from '@angular/core/testing';

import { View2Service } from './view2.service';

describe('View2Service', () => {
  let service: View2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(View2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
