import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaResultComponent } from './schema-result.component';

describe('SchemaResultComponent', () => {
  let component: SchemaResultComponent;
  let fixture: ComponentFixture<SchemaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
