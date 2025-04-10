'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../lib/graphql/queries';
import { Product } from '../lib/graphql/types';
import Link from 'next/link';

export function ProductList(): React.ReactElement {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.products.items.map((product: Product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
          {product.featuredAsset && (
            <img
              src={product.featuredAsset.preview}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">
                ${product.variants[0].priceWithTax / 100}
              </span>
              <Link
                href={`/products/${product.slug}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 