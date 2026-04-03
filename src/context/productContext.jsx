import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const ProductStore = localStorage.getItem('products');
    return ProductStore ? JSON.parse(ProductStore) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const createProduct = (createNewProduct) => {
    setProducts((prev) => [...prev, createNewProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
