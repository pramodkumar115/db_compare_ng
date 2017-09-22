import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionResultComponent } from './function-result.component';

describe('FunctionResultComponent', () => {
  let component: FunctionResultComponent;
  let fixture: ComponentFixture<FunctionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
