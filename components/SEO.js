import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ title, description }) => {
  const { locales, asPath } = useRouter();
  const baseUrl = 'http://localhost:3000'; // Replace with your production URL

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}/${locale}${asPath}`}
        />
      ))}
    </Head>
  );
};

export default SEO;