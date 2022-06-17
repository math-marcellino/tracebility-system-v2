import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { useTracePemotongan } from '../../../swr/useTracePemotongan';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';

type TabelDataPemotonganProps = {};

const TabelDataPemotongan: FunctionComponent<
    TabelDataPemotonganProps
> = ({}) => {
    const provider = useProvider();
    const dataPemotongan = useTracePemotongan({ provider });

    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: 'ID_Pemotongan',
            label: 'ID Pemotongan',
        },
        {
            name: 'date',
            label: 'Date',
        },
        {
            name: 'ID_RPH',
            label: 'ID RPH',
        },
        {
            name: 'jenis_kelamin',
            label: 'Jenis Kelamin Sapi',
        },
        {
            name: 'tanggal_pemotongan',
            label: 'Tanggal Pemotongan',
        },
        {
            name: 'status_kehalalan',
            label: 'Status Kehalalan',
        },
    ];

    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title="Data Pemotongan"
                columns={columnsDistributor}
                data={dataPemotongan.data}
                options={{
                    rowsPerPage: 10,
                    selectableRows: 'none',
                    elevation: 1,
                    textLabels: {
                        body: {
                            noMatch: dataPemotongan.isLoading ? (
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

export default TabelDataPemotongan;
