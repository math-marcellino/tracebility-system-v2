import type { FunctionComponent } from 'react';
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables"

type HotelTableProps = {};

const HotelTable: FunctionComponent<HotelTableProps> = ({}) => {
    interface DataHotel{
        batchID: number,
        tanggal_pengolahan: string,
        cara_pengolahan: string,
        verifier: string,
        sertifHalal: string,
        time: string
    }

    const dataHotel: DataHotel[] = [
        {
            batchID: 1,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 2,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 3,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 4,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 5,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 6,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
        {
            batchID: 7,
            tanggal_pengolahan: "2022-02-12",
            cara_pengolahan: "DiMasak",
            verifier: "William Chandra",
            sertifHalal: "LPPOM-MUI 1394883",
            time: "2022-02-12"
        },
    ]
    
    const columnsHotel: MUIDataTableColumn[] = [
        {
            name: "batchID",
            label: "Batch ID"
        },
        {
            name: "tanggal_pengolahan",
            label: "Tanggal Pemotongan"
        },
        {
            name: "cara_pengolahan",
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
                columns={columnsHotel}
                data={dataHotel}
                options={{
                    rowsPerPage: 5,
                    selectableRows: 'none',
                    elevation: 1
                }}
            />
        </div>
    );
};

export default HotelTable;
