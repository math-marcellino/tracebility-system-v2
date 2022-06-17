import type { FunctionComponent } from 'react';
import DataMakananCard from './components/DataMakananCard';
import ProdukDistributorCard from './components/ProdukDistributorCard';
import ProdukRPHCard from './components/ProdukRPHCard';
import PemotonganCard from './components/PemotonganCard';
import { useState } from 'react';

type TracePageContainerProps = {};

const TracePageContainer: FunctionComponent<TracePageContainerProps> = ({}) => {
    const [idProdukDistributor, setIdProdukDistributor] = useState<string>();
    const [idProdukRPH, setIdProdukRPH] = useState<string>();
    const [idPemotongan, setIdPemotongan] = useState<string>();
    return (
        <div className="flex flex-col items-center gap-6 p-12">
            <h1 className="font-extrabold text-5xl pb-6">Trace</h1>
            <DataMakananCard setIdProdukDistributor={setIdProdukDistributor} />
            <span className="font-extrabold text-5xl">&darr;</span>
            <ProdukDistributorCard
                id={idProdukDistributor}
                setIdProdukRPH={setIdProdukRPH}
            />
            <span className="font-extrabold text-5xl">&darr;</span>
            <ProdukRPHCard id={idProdukRPH} setIdPemotongan={setIdPemotongan} />
            <span className="font-extrabold text-5xl">&darr;</span>
            <PemotonganCard id={idPemotongan} />
        </div>
    );
};

export default TracePageContainer;
