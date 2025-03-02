import { useEffect } from "react";
import useProductStore from "./stores/useProductStore";
import Invoice from "./views/invoice/Invoice";
import "./App.css";

function App() {
  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return <Invoice></Invoice>;
}

export default App;
