import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindComponent } from './form-find.component';

describe('FormFindComponent', () => {
  let component: FormFindComponent;
  let fixture: ComponentFixture<FormFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
