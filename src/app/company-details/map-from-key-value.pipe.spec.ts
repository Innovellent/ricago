import { MapFromKeyValuePipe } from './map-from-key-value.pipe';

describe('MapFromKeyValuePipe', () => {
  it('create an instance', () => {
    const pipe = new MapFromKeyValuePipe();
    expect(pipe).toBeTruthy();
  });
});
