import type { FunctionComponent } from 'react';
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables"

type DistributorTableProps = {};

const DistributorTable: FunctionComponent<DistributorTableProps> = ({}) => {
    interface DataDistributor{
        batchID: number,
        durasi_penyimpanan: string,
        cara_penyimpanan: string,
        status_penyimpanan: string,
        verifier: string,
        sertifHalal: string,
        time: string
    }

    const dataDistributor: DataDistributor[] = [
        {
            batchID: 1,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 2,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 3,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 4,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 5,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 6,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 7,
            durasi_penyimpanan: "60",
            cara_penyimpanan: "Dikulkas",
            status_penyimpanan: "Aman",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
    ]
    
    const columnsDistributor: MUIDataTableColumn[] = [
        {
            name: "batchID",
            label: "Batch ID"
        },
        {
            name: "durasi_penyimpanan",
            label: "Durasi Penyimpanan (Hari)"
        },
        {
            name: "cara_penyimpanan",
            label: "Cara Penyimpanan"
        },
        {
            name: "status_penyimpanan",
            label: "Status Penyimpanan"
        },
        {
            name: "verifier",
            label: "Pemverifikasi"
        },
        {
            name: "sertifHalal",
            label: "Status Kehalalan"
        },
        {
            name: "time",
            label: "Date"
        }
    ]
    
    return (
        <div className="flex flex-col px-16">
            <MUIDataTable
                title=""
                columns={columnsDistributor}
                data={dataDistributor}
                options={{
                    rowsPerPage: 5,
                    selectableRows: 'none',
                    elevation: 1
                }}
            />
        </div>
    );
};

export default DistributorTable;
