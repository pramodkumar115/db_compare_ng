import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseResultComponent } from './database-result.component';

describe('DatabaseResultComponent', () => {
  let component: DatabaseResultComponent;
  let fixture: ComponentFixture<DatabaseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
