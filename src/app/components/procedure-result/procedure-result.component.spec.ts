import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureResultComponent } from './procedure-result.component';

describe('ProcedureResultComponent', () => {
  let component: ProcedureResultComponent;
  let fixture: ComponentFixture<ProcedureResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
