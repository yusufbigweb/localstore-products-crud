import { Route, Routes } from 'react-router-dom';
import Product from './component/product.jsx';
import CreateProduct from './component/createProduct.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
};

export default App;
