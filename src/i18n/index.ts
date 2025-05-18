
import spanish from '@/i18n/zh.json';
import english from '@/i18n/en.json';

const LANG = {
  SPANISH: 'zh',
  ENGLISH: 'en',
};

export const getI18N = (
  { currentLocale = 'zh' }:
    { currentLocale: string | undefined; }
) => {
  if (currentLocale === LANG.ENGLISH) return english
  if (currentLocale === LANG.SPANISH) return spanish
  return spanish;
};
