import { Directive } from '..';

export default new Directive('attr', function ({ element, value, param }) {
  if (value.type === 'statement') return;
  this.$on(value.property || '*', () => {
    const val = value.fn(this);
    if (val === false) element.removeAttribute(param);
    else element.setAttribute(param, val);
  }, { immediate: true });
}, true);