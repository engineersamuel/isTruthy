import { expect } from 'chai';
import { isTruthy, isFalsy, IsTruthyOptions } from '../src';

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
        expect(isTruthy(testArg.val)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val)).to.eq(!testArg.expectedResult);
      });
    });
  });

  describe('falsy boolean', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: IsTruthyOptions;
    };
    const testArgs: TestArg[] = [
      {
        val: false,
        expectedResult: false
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy boolean, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).to.eq(!testArg.expectedResult);
      });
    });
  });
});
