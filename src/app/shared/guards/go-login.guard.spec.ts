import { TestBed, async, inject } from '@angular/core/testing';

import { GoLoginGuard } from './go-login.guard';

describe('GoLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoLoginGuard]
    });
  });

  it('should ...', inject([GoLoginGuard], (guard: GoLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
