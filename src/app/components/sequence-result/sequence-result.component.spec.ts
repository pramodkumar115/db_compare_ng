import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceResultComponent } from './sequence-result.component';

describe('SequenceResultComponent', () => {
  let component: SequenceResultComponent;
  let fixture: ComponentFixture<SequenceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
