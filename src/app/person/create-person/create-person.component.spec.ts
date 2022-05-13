import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatePersoncomponent} from './create-personcomponent';

describe('CreateEmployeeComponent', () => {
  let component: CreatePersoncomponent;
  let fixture: ComponentFixture<CreatePersoncomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePersoncomponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersoncomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
