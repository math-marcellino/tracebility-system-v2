import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceRPH } from '../../../swr/useTraceEvents';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type RPHTableProps = {};

const RPHTable: FunctionComponent<RPHTableProps> = ({}) => {
    const provider = useProvider();
    const events = useTraceRPH({ provider });
    console.log(events);

    const columnsRPH: MUIDataTableColumn[] = [
        {
            name: 'RPHBatchID',
            label: 'RPH Batch ID',
        },
        {
            name: 'jenisKelamin',
            label: 'Jenis Kelamin',
        },
        {
            name: 'tanggalPemotongan',
            label: 'Tanggal Pemotongan',
        },
        {
            name: 'statusPemotongan',
            label: 'Status Pemotongan',
        },
        {
            name: 'verifier',
            label: 'Pemverifikasi',
        },
        {
            name: 'sertifikatHalal',
            label: 'Status Kehalalan',
        },
        {
            name: 'timestamp',
            label: 'Date',
        },
    ];

    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title=""
                columns={columnsRPH}
                data={events.data}
                options={{
                    rowsPerPage: 5,
                    selectableRows: 'none',
                    elevation: 1,
                    textLabels: {
                        body: {
                            noMatch: events.isLoading ? (
                                <p className="animate-pulse text-xl">
                                    Loading data...
                                </p>
                            ) : (
                                'Sorry, there is no matching data to display'
                            ),
                        },
                    },
                }}
            />
        </div>
    );
};

export default RPHTable;
