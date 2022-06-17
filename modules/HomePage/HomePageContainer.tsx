import { FunctionComponent, useState } from 'react';
import TabelDataPemotongan from './components/TabelDataPemotongan';
import TabelDataProdukRPH from './components/TabelDataProdukRPH';
import TabelDataProdukDistributor from './components/TabelDataProdukDistributor';

type HomePageContainerProps = {};

enum TipeTabel {
    pemotongan,
    produkRPH,
    produkDistributor,
    makanan,
}

const HomePageContainer: FunctionComponent<HomePageContainerProps> = ({}) => {
    const [table, setTable] = useState<TipeTabel>(TipeTabel.pemotongan);
    return (
        <div className="space-y-3">
            <div className="space-x-4 flex flex-row justify-center">
                <button
                    className={`border rounded-md w-48 py-1 ${
                        table === TipeTabel.pemotongan &&
                        'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable(TipeTabel.pemotongan);
                    }}
                >
                    Data Pemotongan
                </button>
                <button
                    className={`border rounded-md w-48 py-1 ${
                        table === TipeTabel.produkRPH &&
                        'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable(TipeTabel.produkRPH);
                    }}
                >
                    Data Produk RPH
                </button>
                <button
                    className={`border rounded-md w-48 py-1 ${
                        table === TipeTabel.produkDistributor &&
                        'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable(TipeTabel.produkDistributor);
                    }}
                >
                    Data Produk Distributor
                </button>
                <button
                    className={`border rounded-md w-48 py-1 ${
                        table === TipeTabel.makanan && 'bg-white text-gray-900'
                    }`}
                    onClick={() => {
                        setTable(TipeTabel.makanan);
                    }}
                >
                    Data Makanan
                </button>
            </div>
            <div>
                {table === TipeTabel.pemotongan && <TabelDataPemotongan />}
                {table === TipeTabel.produkRPH && <TabelDataProdukRPH />}
                {table === TipeTabel.produkDistributor && <TabelDataProdukDistributor />}
            </div>
        </div>
    );
};

export default HomePageContainer;
