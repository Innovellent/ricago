import { TestBed, inject } from '@angular/core/testing';

import { SchemedoosierService } from './schemedoosier.service';

describe('SchemedoosierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemedoosierService]
    });
  });

  it('should ...', inject([SchemedoosierService], (service: SchemedoosierService) => {
    expect(service).toBeTruthy();
  }));
});
