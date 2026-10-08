import { TestBed } from '@angular/core/testing';

import { HomeEntryService } from './home.service';
import { HomeEntry } from '../model/home';

describe('HomeEntryService', () => {
  let service: HomeEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and return an entry', () => {
    const entry = new HomeEntry('Doe', 'John', 'john@example.com', '6131234567');
    service.setEntry(entry);
    expect(service.getEntry()).toEqual(entry);
  });
});
