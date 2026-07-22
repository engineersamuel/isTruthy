export type Options = {
  isZeroFalse?: boolean;
  isInfinityFalse?: boolean;
  isEmptyStringFalse?: boolean;
  isEmptyObjectFalse?: boolean;
  isEmptyArrayFalse?: boolean;
  isFilteredArrayFalse?: boolean;
  isFalsyArrayFalse?: boolean;
};

export const isTruthy = (val: any, options?: Options): boolean => {
  // Handle non-strict null equality
  if (val == null) {
    return false;
  }

  if (typeof val === 'number') {
    if (options?.isZeroFalse && val === 0) {
      return false;
    } else if (options?.isInfinityFalse && (val === Infinity || val === -Infinity)) {
      return false;
    } else if (Number.isNaN(val)) {
      return false;
    }
  }

  if (typeof val === 'string') {
    if (options?.isEmptyStringFalse) {
      return val.trim() !== '';
    }
  }

  if (typeof val === 'boolean') {
    return val;
  }

  if (Array.isArray(val)) {
    if (options?.isEmptyArrayFalse && val.length === 0) {
      return false;
    }

    if (options?.isFilteredArrayFalse && !val.some((item) => Boolean(item))) {
      return false;
    }

    if (options?.isFalsyArrayFalse && !val.some((item) => isTruthy(item, options))) {
      return false;
    }

    return true;
  }

  // Not important to check function here, it will fall through to val != null
  if (typeof val === 'object') {
    if (options?.isEmptyObjectFalse) {
      return Object.keys(val as Record<string, unknown>).length > 0;
    }
  }

  // If not == null and no returns above, then we have a true value.  Technically this
  // line should never be hit if we've covered the above appropriately.
  return true;
};

export const isFalsy = (val: any, options?: Options): boolean => !isTruthy(val, options);
