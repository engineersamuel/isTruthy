import { describe, expect, it } from 'vitest';
import { isFalsy, isTruthy, type Options } from '../src';

describe('booleans', () => {
  describe('truthy boolean', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
    };
    const testArgs: TestArg[] = [
      {
        val: true,
        expectedResult: true
      }
    ];

    testArgs.forEach((testArg) => {
      it(`truthy boolean, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val)).toBe(!testArg.expectedResult);
      });
    });
  });

  describe('falsy boolean', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: Options;
    };
    const testArgs: TestArg[] = [
      {
        val: false,
        expectedResult: false
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy boolean, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).toBe(!testArg.expectedResult);
      });
    });
  });
});
