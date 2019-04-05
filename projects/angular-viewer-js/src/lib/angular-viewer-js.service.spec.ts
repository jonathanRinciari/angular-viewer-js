import { TestBed } from '@angular/core/testing';

import { AngularViewerJsService } from './angular-viewer-js.service';

describe('AngularViewerJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularViewerJsService = TestBed.get(AngularViewerJsService);
    expect(service).toBeTruthy();
  });
});
