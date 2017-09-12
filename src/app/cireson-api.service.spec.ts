import { TestBed, inject } from '@angular/core/testing';

import { CiresonApiService } from './cireson-api.service';

describe('CiresonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiresonApiService]
    });
  });

  it('should be created', inject([CiresonApiService], (service: CiresonApiService) => {
    expect(service).toBeTruthy();
  }));
});
