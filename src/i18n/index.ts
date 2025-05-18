
import english from '@/i18n/zh.json';
import spanish from '@/i18n/en.json';

const LANG = {
  ENGLISH: 'zh',
  SPANISH: 'en',
};

export const getI18N = (
  { currentLocale = 'zh' }:
    { currentLocale: string | undefined; }
) => {
  if (currentLocale === LANG.china) return china
  if (currentLocale === LANG.ENGLISH) return english
  return spanish;
};
