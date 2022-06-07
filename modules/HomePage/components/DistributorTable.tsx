import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceDistributor } from '../../../swr/useTraceEvents';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type DistributorTableProps = {};

const DistributorTable: FunctionComponent<DistributorTableProps> = ({}) => {
    const provider = useProvider();
    const events = useTraceDistributor({ provider });

    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'DistributorBatchID',
            label: 'Distributor Batch ID',
        },
        {
            name: 'RPHBatchID',
            label: 'RPH Batch ID',
        },
        {
            name: 'durasiPenyimpanan',
            label: 'Durasi Penyimpanan (Hari)',
        },
        {
            name: 'caraPenyimpanan',
            label: 'Cara Penyimpanan',
        },
        {
            name: 'statusPenyimpanan',
            label: 'Status Penyimpanan',
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
                columns={columnsDistributor}
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

export default DistributorTable;
