import type { FunctionComponent } from 'react';
import { useProvider } from 'wagmi';
import { ethers } from 'ethers';
import { jsonABI, contractAddress, privateKey } from '../../../ABI/contractABI';

type RPHTableProps = {};

const RPHTable: FunctionComponent<RPHTableProps> = ({}) => {
    const provider = useProvider();
    const walletSigner = new ethers.Wallet(privateKey, provider);
    const contractInstance = new ethers.Contract(
        contractAddress,
        jsonABI,
        walletSigner
    );

    const getEvent = async () => {
        const filter = contractInstance.filters.RPHTrace();
        const events = await contractInstance.queryFilter(filter);
    };
    return (
        <div>
            <button onClick={getEvent}>test</button>
        </div>
    );
};

export default RPHTable;
