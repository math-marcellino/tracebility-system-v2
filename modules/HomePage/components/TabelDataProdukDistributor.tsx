import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceProdukDistributor } from '../../../swr/useTraceProdukDistributor';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type TabelDataProdukDistributorProps = {};

const TabelDataProdukDistributor: FunctionComponent<
    TabelDataProdukDistributorProps
> = ({}) => {
    const provider = useProvider();
    const dataProdukDistributor = useTraceProdukDistributor({ provider });

    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'ID_ProdukDistributor',
            label: 'ID Produk Distributor',
        },
        {
            name: 'nama',
            label: 'Nama Produk Distributor',
        },
        {
            name: 'date',
            label: 'Date',
        },
        {
            name: 'ID_Distributor',
            label: 'ID Distributor',
        },
        {
            name: 'ID_ProdukRPH',
            label: 'ID Produk RPH',
        },
        {
            name: 'durasi_penyimpanan',
            label: 'Durasi Penyimpanan',
        },
        {
            name: 'cara_penyimpanan',
            label: 'Cara Penyimpanan',
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
                data={dataProdukDistributor.data}
                options={{
                    rowsPerPage: 10,
                    selectableRows: 'none',
                    elevation: 1,
                    textLabels: {
                        body: {
                            noMatch: dataProdukDistributor.isLoading ? (
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

export default TabelDataProdukDistributor;
