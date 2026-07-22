import { describe, expect, it } from 'vitest';
import { isFalsy, isTruthy, type Options } from '../src';

describe('arrays', () => {
  describe('truthy arrays', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: Options;
    };
    const testArgs: TestArg[] = [
      {
        val: [0],
        expectedResult: true
      },
      {
        val: [1, 2],
        expectedResult: true
      },
      {
        val: ['a'],
        expectedResult: true
      },
      {
        val: [0, 1],
        expectedResult: true,
        options: {
          isFalsyArrayFalse: true
        }
      },
      {
        val: [0],
        expectedResult: true,
        options: {
          isFalsyArrayFalse: true
        }
      },
      {
        val: [''],
        expectedResult: true,
        options: {
          isFalsyArrayFalse: true
        }
      },
    ];

    testArgs.forEach((testArg) => {
      it(`isTruthy array, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).toBe(!testArg.expectedResult);
      });
    });
  });

  describe('falsy arrays', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: Options;
    };
    const testArgs: TestArg[] = [
      {
        val: [],
        expectedResult: false,
        options: {
          isEmptyArrayFalse: true
        }
      },
      {
        val: [0],
        expectedResult: false,
        options: {
          isFalsyArrayFalse: true,
          isZeroFalse: true
        }
      },
      {
        val: [null],
        expectedResult: false,
        options: {
          isFilteredArrayFalse: true
        }
      },
      {
        val: [0, ''],
        expectedResult: false,
        options: {
          isFalsyArrayFalse: true,
          isEmptyStringFalse: true,
          isZeroFalse: true
        }
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy array, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).toBe(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).toBe(!testArg.expectedResult);
      });
    });
  });
});
