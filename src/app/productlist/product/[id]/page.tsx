
interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const id = params.id;

  // fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  
  if (!res.ok) {
    return <div style={{ padding: 20 }}>Error loading product</div>;
  }

  const product = await res.json();

  return (
    <>
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: '30px' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '300px', height: 'auto', objectFit: 'contain' }}
        />
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.title}</h1>
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}>
            {product.description}
          </p>
          <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a8917' }}>
            ₹{product.price}
          </p>
          <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
