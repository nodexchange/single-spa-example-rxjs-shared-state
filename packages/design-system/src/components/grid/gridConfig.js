import moment from 'moment';

export const formatDate = value => value && moment(value).format('DD MMM, YYYY');

const columns = ({ onViewInvoice }) => [{
  field: 'actions',
  title: 'Actions',
  filterable: false,
  rowButtons: [{
    label: 'View',
    handler: (event, model) => onViewInvoice(model.toJSON())
  }, {
    label: 'Delete',
    condition: model => model.toJSON().status === 'Closed'
  }]
}, {
  field: 'invoiceId',
  title: 'Invoice Id',
  type: 'multiselect'
}, {
  field: 'creationDate',
  title: 'Creation Date',
  format: formatDate,
  type: 'date',
  dateFormat: 'DD MMM, YYYY',
  filter: 'agDateColumnFilter'
}, {
  field: 'closeDate',
  title: 'Close Date',
  format: formatDate,
  type: 'date',
  dateFormat: 'DD MMM, YYYY',
  filter: 'agDateColumnFilter'
}, {
  field: 'amount',
  title: 'Amount',
  type: 'number',
  filter: 'agNumberColumnFilter',
  sortable: true
}, {
  field: 'reviewer',
  title: 'Reviewer',
  type: 'multiselect'
}, {
  field: 'status',
    headerName: 'Status',
    type: 'enum',
    enumData: [
      {
        name: 'Approved',
        value: 'Approved'
      },
      {
        name: 'Deleted',
        value: 'Deleted'
      },
      {
        name: 'Rejected',
        value: 'Rejected'
      },
      {
        name: 'No App Req',
        value: 'No App Req'
      },
      {
        name: 'Canceled',
        value: 'Canceled'
      }
    ]
}];

export default ({ onViewInvoice }) => ({
  columnDefs: columns({ onViewInvoice }),
  filterable: true,
  defaultSort: {
    field: 'closeDate',
    order: 'asc'
  }
});
