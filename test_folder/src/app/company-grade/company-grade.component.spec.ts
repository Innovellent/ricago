import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGradeComponent } from './company-grade.component';

describe('CompanyGradeComponent', () => {
  let component: CompanyGradeComponent;
  let fixture: ComponentFixture<CompanyGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
