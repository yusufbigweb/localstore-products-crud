import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/productContext.jsx';

const Product = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className="row-for-nav">
        <h2 className="productTitle">Product: </h2>
        <button className="btn">
          <Link to="/create-product">Add Product</Link>
        </button>
      </div>
      <div className="row">
        {products.map((item) => (
          <div className="col-1">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="product-image"
            />
            <h2>{item.title}</h2>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
