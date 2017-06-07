import { TestBed, inject } from '@angular/core/testing';

import { CompanyDivisionService } from './company-division.service';

describe('CompanyDivisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDivisionService]
    });
  });

  it('should ...', inject([CompanyDivisionService], (service: CompanyDivisionService) => {
    expect(service).toBeTruthy();
  }));
});
