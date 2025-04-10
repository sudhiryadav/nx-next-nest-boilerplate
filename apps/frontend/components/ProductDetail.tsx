'use client';

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCT } from '../lib/graphql/queries';
import { ADD_TO_CART } from '../lib/graphql/mutations';
import { Product } from '../lib/graphql/types';
import { useRouter } from 'next/router';

interface ProductDetailProps {
  slug: string;
}

export function ProductDetail({ slug }: ProductDetailProps): React.ReactElement {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });

  const [addToCart, { loading: addingToCart }] = useMutation(ADD_TO_CART, {
    onCompleted: () => {
      router.push('/cart');
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product: Product = data.product;

  const handleAddToCart = () => {
    addToCart({
      variables: {
        productVariantId: product.variants[0].id,
        quantity,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {product.featuredAsset && (
          <img
            src={product.featuredAsset.preview}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl font-bold">
              ${product.variants[0].priceWithTax / 100}
            </span>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded px-3 py-2 w-20"
            />
          </div>
          <button
            onClick={handleAddToCart}
            disabled={addingToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {addingToCart ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 