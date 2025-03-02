import { useEffect } from "react";
import useProductStore from "./stores/useProductStore";
import "./App.css";

function App() {
  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h2>Product List</h2>
      {/* <ul>
        {products.map((product) => (
          <li key={product.ProductID}>
            {product.ProductName} - ${product.UnitPrice}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
