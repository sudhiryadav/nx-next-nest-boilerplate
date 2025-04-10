import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation AddToCart($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        lines {
          id
          quantity
          linePrice
          linePriceWithTax
          productVariant {
            id
            name
            price
            priceWithTax
          }
        }
        total
        totalWithTax
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($orderLineId: ID!) {
    removeItemFromOrder(orderLineId: $orderLineId) {
      ... on Order {
        id
        lines {
          id
          quantity
          linePrice
          linePriceWithTax
          productVariant {
            id
            name
            price
            priceWithTax
          }
        }
        total
        totalWithTax
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const ADJUST_QUANTITY = gql`
  mutation AdjustQuantity($orderLineId: ID!, $quantity: Int!) {
    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
      ... on Order {
        id
        lines {
          id
          quantity
          linePrice
          linePriceWithTax
          productVariant {
            id
            name
            price
            priceWithTax
          }
        }
        total
        totalWithTax
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const CHECKOUT = gql`
  mutation Checkout($input: CreateOrderInput!) {
    createOrder(input: $input) {
      ... on Order {
        id
        code
        state
        total
        totalWithTax
        lines {
          id
          quantity
          linePrice
          linePriceWithTax
          productVariant {
            id
            name
            price
            priceWithTax
          }
        }
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`; 