import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import LanguageSwitcher from '../components/LanguageSwitcher';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);