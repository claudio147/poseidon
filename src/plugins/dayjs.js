import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/de-ch';

export default {
  install(Vue /* , options */) {
    dayjs.locale('de-ch');
    dayjs.extend(customParseFormat);

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$dayjs = dayjs;
  },
};
