import { TestBed } from '@angular/core/testing';

import { YodaTranslationService } from './yoda-translation.service';

describe('YodaTranslationService', () => {
  let service: YodaTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YodaTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
