import { TestBed, inject } from '@angular/core/testing';

import { CompanyDepartmentService } from './company-department.service';

describe('CompanyDepartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDepartmentService]
    });
  });

  it('should ...', inject([CompanyDepartmentService], (service: CompanyDepartmentService) => {
    expect(service).toBeTruthy();
  }));
});
