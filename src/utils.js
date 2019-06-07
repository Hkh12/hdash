/**
 * Joins two arrays into eachother.
 * @example joinTwo([1,3,5], [2,4]) // '12345'
 */
export const joinTwo = (a, b) => {
  let s = '';
  for (let i = 0; i < a.length; i++) {
    s += a[i];
    if (i in b) {
      s += b[i];
    }
  }
  return s;
};

export const getDeep = (object, path) => {
  if (typeof path === 'string') path = path.split('.');
  return path.reduce((a, b) => a[b], object);
};

export const setDeep = (object, path, value) => {
  if (typeof path === 'string') path = path.split('.');
  const last = path[path.length - 1];
  getDeep(object, path.slice(0, -1))[last] = value;
};

export const isObject = (o, acceptArrays = false) => typeof o === 'object' && o !== null && (!acceptArrays ? !Array.isArray(o) : true);

export const isEmptyObject = o => {
  for (const _ in o) return false;
  return true;
};
