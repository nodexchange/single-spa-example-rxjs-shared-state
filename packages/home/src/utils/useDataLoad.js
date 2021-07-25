import moment from 'moment';
import { useState, useEffect } from 'react';

const useDataLoad = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let handleResponse = responseInvoices => {
      setLoading(false);

      setInvoices(responseInvoices.map(invoice => ({
        ...invoice,
        creationDate: moment.unix(invoice.creationDate).format('YYYY-MM-DD'),
        closeDate: moment.unix(invoice.closeDate).format('YYYY-MM-DD')
      })));
    };

    fetch('http://localhost:3001/api/invoices')
      .then(response => response.json())
      .then(response => handleResponse(response))
      .catch(console.error);

    return () => {
      // istanbul ignore next
      handleResponse = () => {};
    };
  }, [setInvoices, setLoading]);

  return {
    invoices,
    loading
  };
};

export default useDataLoad;
