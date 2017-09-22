import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbselectorComponent } from './dbselector.component';

describe('DbselectorComponent', () => {
  let component: DbselectorComponent;
  let fixture: ComponentFixture<DbselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
