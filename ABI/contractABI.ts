export const jsonABI = [
    {
        inputs: [
            {
                internalType: 'string',
                name: '_ID_Hotel',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_ID_ProdukDistributor',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_nama',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_tanggalPengolahan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_caraPengolahan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_statusKehalalan',
                type: 'string',
            },
        ],
        name: 'setDataMakanan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_ID_RPH',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_jenisKelamin',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_tanggalPemotongan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_statusKehalalan',
                type: 'string',
            },
        ],
        name: 'setDataPemotongan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_ID_Distributor',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_ID_ProdukRPH',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_nama',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: '_durasiPenyimpanan',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: '_caraPenyimpanan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_statusKehalalan',
                type: 'string',
            },
        ],
        name: 'setDataProdukDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_ID_Pemotongan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_nama',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_statusKehalalan',
                type: 'string',
            },
        ],
        name: 'setDataProdukRPH',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_Makanan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_Hotel',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_ProdukDistributor',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'tanggal_pengolahan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'cara_pengolahan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'date',
                type: 'uint256',
            },
        ],
        name: 'TraceMakanan',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_Pemotongan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_RPH',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'jenis_kelamin',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'tanggal_pemotongan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'date',
                type: 'uint256',
            },
        ],
        name: 'TracePemotongan',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_ProdukDistributor',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_Distributor',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_ProdukRPH',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'durasi_penyimpanan',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'cara_penyimpanan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'date',
                type: 'uint256',
            },
        ],
        name: 'TraceProdukDistributor',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_ProdukRPH',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'ID_Pemotongan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'date',
                type: 'uint256',
            },
        ],
        name: 'TraceProdukRPH',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'MakananBatch',
        outputs: [
            {
                internalType: 'string',
                name: 'ID_Hotel',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'ID_ProdukDistributor',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tanggal_pengolahan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'cara_pengolahan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'PemotonganBatch',
        outputs: [
            {
                internalType: 'string',
                name: 'ID_RPH',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'jenis_kelamin',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'tanggal_pemotongan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'ProdukDistributorBatch',
        outputs: [
            {
                internalType: 'string',
                name: 'ID_Distributor',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'ID_ProdukRPH',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'durasi_penyimpanan',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'cara_penyimpanan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'ProdukRPHBatch',
        outputs: [
            {
                internalType: 'string',
                name: 'ID_Pemotongan',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'nama',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'status_kehalalan',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
export const contractAddress = '0x9e8a09af8d9ca58e90e2313d4788f1f35b35d898';
