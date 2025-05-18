
import spanish from '@/i18n/zh.json';

const LANG = {
  SPANISH: 'zh',
};

export const getI18N = (
  { currentLocale = 'zh' }:
    { currentLocale: string | undefined; }
) => {
  if (currentLocale === LANG.ENGLISH) return zhcn
  return spanish;
};
