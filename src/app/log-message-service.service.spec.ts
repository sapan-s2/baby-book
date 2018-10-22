import { TestBed } from '@angular/core/testing';

import { LogMessageServiceService } from './log-message-service.service';

describe('LogMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogMessageServiceService = TestBed.get(LogMessageServiceService);
    expect(service).toBeTruthy();
  });
});
