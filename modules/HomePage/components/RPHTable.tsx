import type { FunctionComponent } from 'react';
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables"

type RPHTableProps = {};

const RPHTable: FunctionComponent<RPHTableProps> = ({}) => {
    interface DataRPH{
        batchID: number,
        jenis_kelamin: string,
        tanggal_pemotongan: string,
        status_pemotongan: string,
        verifier: string,
        sertifHalal: string,
        time: string
    }

    const dataRPH: DataRPH[] = [
        {
            batchID: 1,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 2,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 3,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 4,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 5,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 6,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 7,
            jenis_kelamin: "Jantan",
            tanggal_pemotongan: "2022-02-12",
            status_pemotongan: "Potong",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
    ]
    
    const columnsRPH: MUIDataTableColumn[] = [
        {
            name: "batchID",
            label: "Batch ID"
        },
        {
            name: "jenis_kelamin",
            label: "Jenis Kelamin"
        },
        {
            name: "tanggal_pemotongan",
            label: "Tanggal Pemotongan"
        },
        {
            name: "status_pemotongan",
            label: "Status Pemotongan"
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
                columns={columnsRPH}
                data={dataRPH}
                options={{
                    rowsPerPage: 5,
                    selectableRows: 'none',
                    elevation: 1
                }}
            />
        </div>
    );
};

export default RPHTable;
