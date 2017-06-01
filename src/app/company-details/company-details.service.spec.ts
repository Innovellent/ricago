import { TestBed, inject } from '@angular/core/testing';

import { CompanyDetailsService } from './company-details.service';

describe('CompanyDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDetailsService]
    });
  });

  it('should ...', inject([CompanyDetailsService], (service: CompanyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
