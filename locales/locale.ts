import 'server-only'

export const getLocale = async (locale: 'en' | 'am') => {
  switch (locale) {
    default:
    case 'en':
      return (await import('./en.json')).default;
    case 'am':
      return (await import('./am.json')).default;
  }
}