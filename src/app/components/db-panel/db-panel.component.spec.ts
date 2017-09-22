import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbPanelComponent } from './db-panel.component';

describe('DbPanelComponent', () => {
  let component: DbPanelComponent;
  let fixture: ComponentFixture<DbPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
