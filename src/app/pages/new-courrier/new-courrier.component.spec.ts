import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourrierComponent } from './new-courrier.component';

describe('NewCourrierComponent', () => {
  let component: NewCourrierComponent;
  let fixture: ComponentFixture<NewCourrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
