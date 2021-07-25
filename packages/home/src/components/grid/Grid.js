import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ComposedGrid, GridLoading } from '@example/design-system';
import gridConfig from './gridConfig';
import useDataLoad from '../../utils/useDataLoad';

// import moment from 'moment';

export const formatDate = value => value && moment(value).format('DD MMM, YYYY');


const Grid = props => {
  const { invoices, loading } = useDataLoad();
  const [totalRecords, setTotalRecords] = useState();
  const [invoiceDetails, setInvoiceDetails] = useState();

  const [{
    filters, page, pageSize
  }, setGridState] = useState({
    page: 0,
    pageSize: 25,
    filters: [],
  });

  const onViewInvoice = useCallback((newInvoiceDetails) => {
    // setShowModal(true);
    setInvoiceDetails(newInvoiceDetails);
  }, []);

  useEffect(() => {
    console.log(invoices);
  }, [invoices]);

  // useful link: for columnDefs https://bitbucket.bottomline.tech/projects/GLU/repos/glu-grid-react/browse/stories/ComposedGrid/utils/ComposedGrid.columns.js
  return (
    <div>
      <GridLoading isLoading={loading}>
        {/* <p>hello</p> */}
        <ComposedGrid
          gridId="StoryGrid"
          records={invoices}
          showExportMenu={false}
          onExportToExcel={() => window.alert('Export to Excel')}
          onExportToCsv={() => window.alert('Export to CSV')}
          columnDefs={[
            {
              field: 'status',
              headerName: 'Status'
            },
            {
              field: 'invoiceId',
              headerName: 'Invoice Id'
            },
            {
              field: 'reviewer',
              headerName: 'Reviewer'
            },
            {
              field: 'creationDate',
              headerName: 'Creation Date',
              type: 'date',
              format: formatDate,
              dateFormat: 'DD MMM, YYYY'
            },
            {
              field: 'closeDate',
              headerName: 'Close Date',
              type: 'date'
            },
            {
              field: 'amount',
              headerName: 'Amount Date',
              className: 'text-right'
            }
          ]}
        />
        </GridLoading>
    </div>
  );
};

Grid.propTypes = {

};

export default Grid;
