import error from './error'

/**
 * @param {string[]} formatters 
 * @param {{[x: string]: Function}} source 
 * @returns {Function}
 */
export default function makeFormatterFn(formatters, source) {
	if (!formatters.length) return v => v
	return formatters.map(f => {
		if (!(f in source)) error(`formatter ${f} not found`)
		else return source[f]
	}).reduce((a, b) => arg => b(a(arg)))
}