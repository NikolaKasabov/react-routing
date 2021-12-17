import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));


  // redirect if there is no invoice for this search param
  useEffect(() => {
    if (!invoice) {
      navigate('/');
      return null;
    }
  }, []);

  if (!invoice) {
    return null;
  }

  

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}