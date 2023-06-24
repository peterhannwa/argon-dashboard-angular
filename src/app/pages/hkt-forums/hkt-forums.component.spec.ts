import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HKTForumsComponent } from './hkt-forums.component';

describe('HKTForumsComponent', () => {
  let component: HKTForumsComponent;
  let fixture: ComponentFixture<HKTForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HKTForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HKTForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
