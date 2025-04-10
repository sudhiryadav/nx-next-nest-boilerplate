export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  variants: ProductVariant[];
  featuredAsset?: {
    preview: string;
  };
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  priceWithTax: number;
  stockLevel: string;
}

export interface Cart {
  id: string;
  lines: CartLine[];
  total: number;
  totalWithTax: number;
}

export interface CartLine {
  id: string;
  quantity: number;
  linePrice: number;
  linePriceWithTax: number;
  productVariant: ProductVariant;
}

export interface Order {
  id: string;
  code: string;
  state: string;
  total: number;
  totalWithTax: number;
  lines: OrderLine[];
}

export interface OrderLine {
  id: string;
  quantity: number;
  linePrice: number;
  linePriceWithTax: number;
  productVariant: ProductVariant;
} 