import React from 'react';
import ReactTable from 'react-table';
import '../styles/global';
export default class Table extends React.Component {
    render() {
        return (<ReactTable
            style={{ width: '100%' }}
            data={[
                {shareholder: '123', type: 'type', number: 123, percentage: '100' }
            ]}
            columns={getColumns()}
        />);
    }
}

function getColumns () {
    const tableColumns = [
        {
            Header: 'Shareholder',
            accessor: 'shareholder',
            Cell: ({original}) => {
                return original.shareholder || '';
            }
        },
        {
            Header: 'Type',
            accessor: 'type',
            Cell: ({original}) => {
                return original.type || '';
            }
        },
        {
            Header: 'Number of Shares',
            accessor: 'number',
            Cell: ({original}) => {
                return original.number || 0;
            }
        },
        {
            Header: 'Percentage',
            accessor: 'percentage',
            Cell: ({original}) => {
                return original.percentage + '%';
            }
        },
    ];
    return tableColumns;
}