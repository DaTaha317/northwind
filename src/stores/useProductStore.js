import { create } from "zustand";
import { client } from "../odata/ODataClient";

const useProductStore = create((set) => ({
  products: [],
  getProducts: async () => {
    try {
      const filter = client
        .newFilter()
        .property("ShipName")
        .eq("Berglunds snabbköp");
      const result = await client.newRequest({
        collection: "Invoices",
        params: client.newParam().filter(filter)
      });

      console.log("result", result.value);
      set({ products: result.value });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}));

export default useProductStore;
