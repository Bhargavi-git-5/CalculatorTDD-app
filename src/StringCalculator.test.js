import { add } from './StringCalculator';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself when there is only one number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add('1,5')).toBe(6);
  });

  test('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4');
  });

  test('should throw an error for invalid number formats', () => {
    expect(() => add('1,a,3')).toThrow('Invalid number: a');
  });
});
