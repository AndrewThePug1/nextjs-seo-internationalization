import Link from 'next/link';
import products from '../data/products';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import SEO from '../components/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <SEO
        title={t('meta.homeTitle')}
        description={t('meta.homeDescription')}
      />
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});