import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubsListComponent } from './stubs-list.component';

describe('StubsListComponent', () => {
  let component: StubsListComponent;
  let fixture: ComponentFixture<StubsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StubsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
