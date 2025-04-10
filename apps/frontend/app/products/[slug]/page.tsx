import { ProductDetail } from '../../../components/ProductDetail';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main>
      <ProductDetail slug={params.slug} />
    </main>
  );
} 