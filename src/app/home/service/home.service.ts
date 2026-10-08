import { Injectable } from '@angular/core';
import { HomeEntry } from '../model/home';

@Injectable({
  providedIn: 'root',
})
export class HomeEntryService {
  private entry: HomeEntry | null = null;

  setEntry(entry: HomeEntry) {
    this.entry = entry;
  }

  getEntry(): HomeEntry | null {
    return this.entry;
  }
}
