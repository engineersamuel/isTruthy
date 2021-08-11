const isNumber = (val: any): val is number => {
  if (val == null) {
    return false;
  }
  // return typeof val === 'number' && isFinite(val);
  return typeof val === 'number';
}

const isString = (val: any): val is string => {
  if (val == null) {
    return false;
  }
  return typeof val === 'string';
}

const isBoolean = (val: any): val is boolean => {
  if (val == null) {
    return false;
  }
  return typeof val === 'boolean';
}

const isObject = (val: any): val is object => {
  if (val == null) {
    return false;
  }
  return (typeof val === 'object');
}

export type IsTruthyOptions = {
  isZeroFalse?: boolean;
  isInfinityFalse?: boolean;
  isEmptyStringFalse?: boolean;
  isEmptyObjectFalse?: boolean;
  isEmptyArrayFalse?: boolean;
  isFilteredArrayFalse?: boolean;
  isFalsyArrayFalse?: boolean;
};

export const isTruthy = (val: any, options?: IsTruthyOptions): boolean => {

  // console.debug(`val: ${val}, typeof val: ${typeof val}, opts: ${JSON.stringify(options)}`);

  if (isNumber(val)) {
    if (options?.isZeroFalse && val === 0) {
      return false;
    } else if (options?.isInfinityFalse && (val === Infinity || val === -Infinity)) {
      return false;
    } else if (Number.isNaN(val)) {
      return false;
    }
  }

  if (isString(val)) {
    if (options?.isEmptyStringFalse) {
      return val.trim() !== '';
    }
  }

  if (isBoolean(val)) {
    return val;
  }

  if (Array.isArray(val)) {
    if (options?.isEmptyArrayFalse) {
      return val.length > 0;
    } else if (options?.isFilteredArrayFalse) {
      return val.filter((v) => v).length > 0;
    } else if (options?.isFalsyArrayFalse) {
      return val.filter((v) => isTruthy(v)).filter((v) => v).length > 0;
    }
  }

  // Not important to check function here, it will fall through to val != null
  if (isObject(val)) {
    if (options?.isEmptyObjectFalse) {
      return Object.keys(val).length > 0; 
    }
  }

  // This non-strict check will cover null and undefined
  return val != null;
}

export const isFalsy = (val: any, options?: IsTruthyOptions): boolean => !isTruthy(val, options);
