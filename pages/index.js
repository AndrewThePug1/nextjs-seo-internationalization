import Link from 'next/link';
import products from '../data/products';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const HomePage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDescription')} />
      </Head>
      <div>
        <h1>{t('welcome')}</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`} locale={locale}>
                {product.name[locale]}
              </Link>
              <p>{product.description[locale]}</p>
              <p>
                {t('product.price')}: ${product.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;