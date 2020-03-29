import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCourrierComponent } from './find-courrier.component';

describe('FindCourrierComponent', () => {
  let component: FindCourrierComponent;
  let fixture: ComponentFixture<FindCourrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCourrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
