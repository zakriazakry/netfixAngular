import { TmdbPipe } from './tmdb.pipe';

describe('TmdbPipe', () => {
  it('create an instance', () => {
    const pipe = new TmdbPipe();
    expect(pipe).toBeTruthy();
  });
});
