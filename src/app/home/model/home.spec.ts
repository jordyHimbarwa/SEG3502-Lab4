import { HomeEntry } from './home';

describe('HomeEntry', () => {
  it('should create an instance', () => {
    expect(new HomeEntry('Doe', 'John', 'john@example.com', '6131234567')).toBeTruthy();
  });
});
