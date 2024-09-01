import { TestBed } from '@angular/core/testing';

import { HttpIntercptorService } from './http-intercptor.service';

describe('HttpIntercptorService', () => {
  let service: HttpIntercptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
