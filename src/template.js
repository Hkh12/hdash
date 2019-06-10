import { joinTwo, isObject } from './utils';

/**
 * @param {string[]} names
 * @param {Object<string, import(".").Formatter} source
 */
export function makeFormatterFunction(names, source) {
  return names.map(n => source[n]).reduce((a, b) => c => b(a(c)), _ => _);
}

export const toString = x => (isObject(x, true) ? JSON.stringify(x) : String(x));

/**
 * @param {string} text
 * @param {Object<string, import(".").Formatter} fmtSource
 */
export default function createTemplate(text, fmtSource) {
  const reg = /@\( *(?:[a-z_]\w*\.)*\w+(?: \| [a-z]+)* *\)/gi,
    matches = (text.match(reg) || []).map(e => {
      const [variable, ...formatters] = e.slice(2, -1).trim().split(' | ');
      return { variable, formatters };
    }),
    others = text.split(reg);

  return {
    vars: matches.map(m => m.variable),
    /** @param {import('./context').default} ctx */
    render: ctx => {
      return joinTwo(others, matches.map(m => {
        const format = makeFormatterFunction(m.formatters, fmtSource),
          value = ctx.$get(m.variable);

        return toString(format(toString(value)));
      }));
    }
  };
}
