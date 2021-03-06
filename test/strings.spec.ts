import { expect } from 'chai';
import { isTruthy, isFalsy, Options } from '../src';

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
        val: 'πΆ',
        expectedResult: true
      },
      {
        val: 'β',
        expectedResult: true
      },
      {
        val: 'οΊ',
        expectedResult: true
      },
      {
        val: 'κ',
        expectedResult: true
      },
      {
        val: 'γ³',
        expectedResult: true
      },
      {
        val: 'γ',
        expectedResult: true
      },
      {
        val: '',
        expectedResult: true
      },
      {
        val: 'Χ',
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
      options?: Options;
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
