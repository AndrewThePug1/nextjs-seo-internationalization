import { useRouter } from 'next/router';
import products from '../../data/products';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SEO from '../../components/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProductDetails = ({ product }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <SEO
        title={product.name[locale]}
        description={product.description[locale]}
      />
      <div>
        <h1>{product.name[locale]}</h1>
        <Image
          src={product.image}
          alt={product.name[locale]}
          width={500}
          height={500}
        />
        <p>{product.description[locale]}</p>
        <p>
          {t('product.price')}: ${product.price}
        </p>
        <Link href="/" locale={locale}>
          {t('product.backToHome')}
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;

export const getStaticProps = async ({ locale, params }) => {
  const productId = params.id;
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = products.flatMap((product) =>
    ['en', 'es'].map((locale) => ({
      params: { id: product.id.toString() },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};