import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/productContext';

const CreateProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder]: e.target.value,
    });
  };

  const ProductSubmit = (e) => {
    e.preventDefault();
    createProduct(formData);
    navigate('/');
  };

  return (
    <div>
      <div className="row-for-nav">
        <h2 className="productTitle">Create Product: </h2>
        <button className="btn">
          <Link to="/">Back to Products</Link>
        </button>
      </div>
      <form onSubmit={ProductSubmit} className="create-product">
        <label htmlFor="Title">Title:</label>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <br />
        <label htmlFor="Price">Price:</label>
        <input
          type="number"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="imageUrl">Image_Url:</label>
        <input
          type="text"
          placeholder="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="input-btn">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
