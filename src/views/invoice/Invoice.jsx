import InvoiceFilterBar from "./components/InvoiceFilterBar";
import InvoiceContent from "./components/InvoiceContent";

function Invoice({ children }) {
  return (
    <InvoiceFilterBar>
      <InvoiceContent />
    </InvoiceFilterBar>
  );
}

export default Invoice;
