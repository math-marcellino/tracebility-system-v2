import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceHotel } from '../../../swr/useTraceEvents';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type HotelTableProps = {};

const HotelTable: FunctionComponent<HotelTableProps> = ({}) => {
    const provider = useProvider();
    const events = useTraceHotel({ provider });

    const columnsHotel: MUIDataTableColumn[] = [
        {
            name: 'HotelBatchID',
            label: 'Hotel Batch ID',
        },
        {
            name: 'DisributorBatchID',
            label: 'Distributor Batch ID',
        },
        {
            name: 'tanggalPengolahan',
            label: 'Tanggal Pemotongan',
        },
        {
            name: 'caraPengolahan',
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
                columns={columnsHotel}
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

export default HotelTable;
