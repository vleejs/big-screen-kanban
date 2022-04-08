const toString = Object.prototype.toString;

export const isBoolean = () => typeof val === 'boolean';
export const isFunction = () => typeof val === 'function';
export const isNumber = () => typeof val === 'number';
export const isString = (val) => typeof val === 'string';
export const isObject = (val) => toString.call(val) === '[object Object]';

export const now = () => Date.now();
