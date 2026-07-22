import { describe, expect, it } from 'vitest';
import { isFalsy, isTruthy, type Options } from '../src';

describe('misc', () => {
  describe('falsy vals', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: Options;
    };
    const testArgs: TestArg[] = [
      {
        val: null,
        expectedResult: false,
      },
      {
        val: Number.NaN,
        expectedResult: false,
      },
      {
        val: undefined,
        expectedResult: false,
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy vals, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).toBe(!testArg.expectedResult);
      });
    });
  });
});
