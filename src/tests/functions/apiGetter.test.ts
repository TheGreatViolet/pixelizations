/* eslint-disable jest/valid-expect-in-promise */
import { checkKey, getUUID } from '../../functions/apiGetter';

test('Getting UUID', () => {
  const player = 'litteraly1984';
  getUUID(player).then(uuid => {
    expect(uuid).toBe('a9b8f8f7-e8e7-4f6c-b8e6-e8e7e8e6e5e4');
  });
});

test('Testing API Key', () => {
  expect(checkKey()).toBe('good');
});