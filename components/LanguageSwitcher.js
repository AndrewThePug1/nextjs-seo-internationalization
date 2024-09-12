import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale, asPath } = router;

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={changeLanguage}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc === 'en' ? 'English' : 'Español'}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;