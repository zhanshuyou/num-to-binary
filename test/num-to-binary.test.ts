import { numToBinary } from '../src';

test('numToBinary: 8', () => {
  expect(numToBinary(8)).toBe('1000');
});

test('numToBinary: 0.7', () => {
  expect(numToBinary(0.7)).toBe('0.1011001100110011001100110011001100110011001100110011');
});

it('tests numToBinary: sss', () => {
  try {
    numToBinary('sss' as any);
  } catch (e) {
    expect(e.message).toEqual('num is not a number.');
  }
});
