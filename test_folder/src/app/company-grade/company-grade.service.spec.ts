import { TestBed, inject } from '@angular/core/testing';

import { CompanyGradeService } from './company-grade.service';

describe('CompanyGradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyGradeService]
    });
  });

  it('should ...', inject([CompanyGradeService], (service: CompanyGradeService) => {
    expect(service).toBeTruthy();
  }));
});
