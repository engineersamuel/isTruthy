import { expect } from 'chai';
import { isTruthy, isFalsy, IsTruthyOptions } from '../src';

describe('numbers', () => {
  describe('truthy numbers', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
    };
    const testArgs: TestArg[] = [
      {
        val: -1,
        expectedResult: true
      },
      {
        val: -1.0,
        expectedResult: true
      },
      {
        val: -1.00000000000000000000000000000001,
        expectedResult: true
      },
      {
        val: -0,
        expectedResult: true
      },
      {
        val: 0,
        expectedResult: true
      },
      {
        val: 0.0000000000000000000000001,
        expectedResult: true
      },
      {
        val: 0.0,
        expectedResult: true
      },
      {
        val: 1,
        expectedResult: true
      },
      {
        val: 1.0,
        expectedResult: true
      },
      {
        val: 1.00000000000000000000000000000001,
        expectedResult: true
      },
      {
        val: 999,
        expectedResult: true
      },
      {
        val: Number.MAX_SAFE_INTEGER,
        expectedResult: true
      },
      {
        val: Number.MAX_VALUE,
        expectedResult: true
      },
      {
        val: Number.MIN_SAFE_INTEGER,
        expectedResult: true
      },
      {
        val: Number.MIN_VALUE,
        expectedResult: true
      },
      {
        val: Infinity,
        expectedResult: true
      },
      {
        val: -Infinity,
        expectedResult: true
      },
    ];

    testArgs.forEach((testArg) => {
      it(`truthy number, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val)).to.eq(!testArg.expectedResult);
      });
    });
  });

  describe('falsy numbers', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: IsTruthyOptions;
    };
    const testArgs: TestArg[] = [
      {
        val: -0,
        expectedResult: false,
        options: {
          isZeroFalse: true
        }
      },
      {
        val: 0,
        expectedResult: false,
        options: {
          isZeroFalse: true
        }
      },
      {
        val: 0.0,
        expectedResult: false,
        options: {
          isZeroFalse: true
        }
      },
      {
        val: 0.000000000000000000000000000000000,
        expectedResult: false,
        options: {
          isZeroFalse: true
        }
      },
      {
        val: Number.NaN,
        expectedResult: false
      },
      {
        val: Infinity,
        expectedResult: false,
        options: {
          isInfinityFalse: true
        }
      },
      {
        val: -Infinity,
        expectedResult: false,
        options: {
          isInfinityFalse: true
        }
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy number, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).to.eq(!testArg.expectedResult);
      });
    });

  });
});
