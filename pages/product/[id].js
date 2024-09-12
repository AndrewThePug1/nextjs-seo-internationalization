import { useRouter } from 'next/router';
import products from '../../data/products';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const ProductDetails = () => {
  const { query, locale } = useRouter();
  const { t } = useTranslation('common');
  const { id } = query;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name[locale]}</title>
        <meta name="description" content={product.description[locale]} />
      </Head>
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