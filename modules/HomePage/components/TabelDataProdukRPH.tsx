import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceProdukRPH } from '../../../swr/useTraceProdukRPH';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type TabelDataProdukRPHProps = {};

const TabelDataProdukRPH: FunctionComponent<
    TabelDataProdukRPHProps
> = ({}) => {
    const provider = useProvider();
    const events = useTraceProdukRPH({ provider });
    console.log(events)

    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'ID_ProdukRPH',
            label: 'ID Produk RPH',
        },
        {
            name: 'nama',
            label: 'Nama Produk RPH',
        },
        {
            name: 'date',
            label: 'Date',
        },
        {
            name: 'ID_Pemotongan',
            label: 'ID Pemotongan',
        },
        {
            name: 'status_kehalalan',
            label: 'Status Kehalalan',
        },
    ];

    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title="Data Produk RPH"
                columns={columnsDistributor}
                data={events.data}
                options={{
                    rowsPerPage: 10,
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

export default TabelDataProdukRPH;
