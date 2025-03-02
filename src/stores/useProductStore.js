import { create } from "zustand";
import { client } from "../odata/ODataClient";

const useProductStore = create((set) => ({
  products: [],
  getProducts: async () => {
    try {
      const result = await client.newRequest({
        collection: "Products"
      });
      console.log("result", result.value);
      set({ products: result.value });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}));

export default useProductStore;
