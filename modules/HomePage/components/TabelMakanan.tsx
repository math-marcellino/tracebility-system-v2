import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTraceMakanan } from '../../../swr/useTrace';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type TabelMakananProps = {};

const TabelMakanan: FunctionComponent<TabelMakananProps> = ({}) => {
    const provider = useProvider();
    const dataMakanan = useTraceMakanan({ provider });

    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'ID_Makanan',
            label: 'ID Makanan',
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
            name: 'ID_Hotel',
            label: 'ID Hotel',
        },
        {
            name: 'ID_ProdukDistributor',
            label: 'ID Produk Distributor',
        },
        {
            name: 'tanggal_pengolahan',
            label: 'Tangan Pengolahan',
        },
        {
            name: 'cara_pengolahan',
            label: 'Cara Pengolahan',
        },
        {
            name: 'status_kehalalan',
            label: 'Status Kehalalan',
        },
    ];

    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title="Data Makanan"
                columns={columnsDistributor}
                data={dataMakanan.data}
                options={{
                    rowsPerPage: 10,
                    selectableRows: 'none',
                    elevation: 1,
                    textLabels: {
                        body: {
                            noMatch: dataMakanan.isLoading ? (
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

export default TabelMakanan;
