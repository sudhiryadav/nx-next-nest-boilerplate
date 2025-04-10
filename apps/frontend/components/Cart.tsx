'use client';

import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CART } from '../lib/graphql/queries';
import { REMOVE_FROM_CART, ADJUST_QUANTITY } from '../lib/graphql/mutations';
import { Cart } from '../lib/graphql/types';
import Link from 'next/link';

export function Cart(): React.ReactElement {
  const { loading, error, data, refetch } = useQuery(GET_CART);
  const [removeFromCart] = useMutation(REMOVE_FROM_CART, {
    onCompleted: () => refetch(),
  });
  const [adjustQuantity] = useMutation(ADJUST_QUANTITY, {
    onCompleted: () => refetch(),
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cart: Cart = data.activeOrder;

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.lines.map((line) => (
          <div
            key={line.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold">{line.productVariant.name}</h3>
                <p className="text-gray-600">
                  ${line.productVariant.priceWithTax / 100}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                value={line.quantity}
                onChange={(e) =>
                  adjustQuantity({
                    variables: {
                      orderLineId: line.id,
                      quantity: parseInt(e.target.value),
                    },
                  })
                }
                className="border rounded px-2 py-1 w-16"
              />
              <button
                onClick={() =>
                  removeFromCart({
                    variables: { orderLineId: line.id },
                  })
                }
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold">
            ${cart.totalWithTax / 100}
          </span>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Link
            href="/"
            className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600"
          >
            Continue Shopping
          </Link>
          <Link
            href="/checkout"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
} 