import { describe, expect, it } from 'vitest';
import { isFalsy, isTruthy, type Options } from '../src';

describe('objects', () => {
  describe('truthy objects', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
    };
    const testArgs: TestArg[] = [
      {
        val: {},
        expectedResult: true
      },
      {
        val: { a: 0 },
        expectedResult: true
      },
      {
        val: { b: 'a' },
        expectedResult: true
      },
      {
        val: { c: {} },
        expectedResult: true
      },
    ];

    testArgs.forEach((testArg) => {
      it(`truthy object, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val)).toBe(!testArg.expectedResult);
      });
    });
  });

  describe('falsy object', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: Options;
    };
    const testArgs: TestArg[] = [
      {
        val: {},
        expectedResult: false,
        options: {
          isEmptyObjectFalse: true
        }
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy object, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).toBe(!testArg.expectedResult);
      });
    });
  });
});
