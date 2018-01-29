import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComp1Component } from './new-comp1.component';

describe('NewComp1Component', () => {
  let component: NewComp1Component;
  let fixture: ComponentFixture<NewComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
