'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);

  const handleAddToCart = () => {
    if (!product) return;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Update quantity
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }} className='columns-2 gap-20'>
      {/* Product Details */}
      <div style={{ display: 'flex', gap: 30, marginBottom: 40 }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: 300, height: 'auto', objectFit: 'contain' }}
        />
        <div>
          <h1 className='font-bold flex-1/2'>{product.title}</h1>
          <p style={{ color: '#555', marginTop: 10 }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
            ₹{product.price}
          </p>
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: 20,
              padding: '10px 20px',
              background: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart Section */}
      <div>
        <h2 style={{ fontSize: 22, marginBottom: 10 }}>🛒 Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f0f0f0' }}>
                <th style={{ textAlign: 'left', padding: 10 }}>Product</th>
                <th style={{ textAlign: 'right', padding: 10 }}>Price</th>
                <th style={{ textAlign: 'right', padding: 10 }}>Qty</th>
                <th style={{ textAlign: 'right', padding: 10 }}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product.id}>
                  <td style={{ padding: 10 }}>{item.product.title}</td>
                  <td style={{ textAlign: 'right', padding: 10 }}>
                    ₹{item.product.price}
                  </td>
                  <td style={{ textAlign: 'right', padding: 10 }}>
                    {item.quantity}
                  </td>
                  <td style={{ textAlign: 'right', padding: 10 }}>
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} style={{ textAlign: 'right', padding: 10 }}>
                  <strong>Total:</strong>
                </td>
                <td style={{ textAlign: 'right', padding: 10 }}>
                  <strong>₹{total.toFixed(2)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}
