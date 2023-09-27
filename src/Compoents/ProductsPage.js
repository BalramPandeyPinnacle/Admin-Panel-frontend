import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
          .then(response => response.json())
          .then(data => {
            console.log('Fetched data:', data);
            setProducts(data);
          })
          .catch(error => console.error('Error fetching videos:', error));
      }, []);
      return (<>
        <div className='productList-Heading'><h3>Product List</h3></div>
        <div className="product-list">
            
          
          {products.map(product =>(
            <div key={product._id} className="product-card">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>category: {product.category}</p>
              <p>company: {product.company}</p>
              </div>
          ))}
        </div>
        </>
      );
}
