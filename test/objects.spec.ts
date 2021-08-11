import { expect } from 'chai';
import { isTruthy, isFalsy, IsTruthyOptions } from '../src';

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
        val: {a: 0},
        expectedResult: true
      },
      {
        val: {b: 'a'},
        expectedResult: true
      },
      {
        val: {c: {}},
        expectedResult: true
      },
    ];

    testArgs.forEach((testArg) => {
      it(`truthy object, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val)).to.eq(!testArg.expectedResult);
      });
    });
  });

  describe('falsy object', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: IsTruthyOptions;
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
        expect(isTruthy(testArg.val, testArg.options)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).to.eq(!testArg.expectedResult);
      });
    });

  });
});
