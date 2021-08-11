import { expect } from 'chai';
import { isTruthy, isFalsy, IsTruthyOptions } from '../src';

describe('strings', () => {
  describe('truthy strings', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
    };
    const testArgs: TestArg[] = [
      {
        val: '',
        expectedResult: true
      },
      {
        val: ' ',
        expectedResult: true
      },
      {
        val: '0',
        expectedResult: true
      },
      {
        val: '1',
        expectedResult: true
      },
      {
        val: 'a',
        expectedResult: true
      },
      {
        val: 'Hello World',
        expectedResult: true
      },
      {
        val: 'U+1F44D',
        expectedResult: true
      },
      {
        val: '\u00E9',
        expectedResult: true
      },
      {
        val: '🐶',
        expectedResult: true
      },
      {
        val: '​',
        expectedResult: true
      },
      {
        val: 'ﺎ',
        expectedResult: true
      },
      {
        val: 'ꀀ',
        expectedResult: true
      },
      {
        val: 'ン',
        expectedResult: true
      },
      {
        val: 'か',
        expectedResult: true
      },
      {
        val: '',
        expectedResult: true
      },
      {
        val: 'א',
        expectedResult: true
      }
    ];

    testArgs.forEach((testArg) => {
      it(`truthy string, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val)).to.eq(!testArg.expectedResult);
      });
    });
  });

  describe('falsy strings', () => {
    type TestArg = {
      val: any;
      expectedResult: boolean;
      options?: IsTruthyOptions;
    };
    const testArgs: TestArg[] = [
      {
        val: '',
        expectedResult: false,
        options: {
          isEmptyStringFalse: true
        }
      },
      {
        val: ' ',
        expectedResult: false,
        options: {
          isEmptyStringFalse: true
        }
      },
      {
        val: '   ',
        expectedResult: false,
        options: {
          isEmptyStringFalse: true
        }
      },
    ];

    testArgs.forEach((testArg) => {
      it(`falsy string, args: ${JSON.stringify(testArg)}`, () => {
        expect(isTruthy(testArg.val, testArg.options)).to.eq(testArg.expectedResult);
        expect(isFalsy(testArg.val, testArg.options)).to.eq(!testArg.expectedResult);
      });
    });

  });
});
