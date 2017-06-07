import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemedoosierComponent } from './schemedoosier.component';

describe('SchemedoosierComponent', () => {
  let component: SchemedoosierComponent;
  let fixture: ComponentFixture<SchemedoosierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemedoosierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemedoosierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
