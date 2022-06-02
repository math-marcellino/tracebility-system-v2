export const jsonABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tanggal_pengiriman",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "status_pengiriman",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "DistributorTrace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "durasi_penyimpanan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cara_penyimpanan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "status_penyimpanan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tanggal_pengolahan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cara_pengolahan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "HotelTrace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "jenis_kelamin",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tanggal_pemotongan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "status_pemotongan",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "RPHTrace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "DistributorBatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "tanggal_pengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status_pengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "HotelBatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "durasi_penyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cara_penyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status_penyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggal_pengolahan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cara_pengolahan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "RPHBatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"internalType": "enum TraceabilityV2.SupplyChainSteps",
				"name": "step",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "jenis_kelamin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggal_pemotongan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status_pemotongan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "jenisKelamin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggalPemotongan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "statusPemotongan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			}
		],
		"name": "createItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tanggalPengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "statusPengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			}
		],
		"name": "step2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "durasiPenyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "caraPenyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "statusPenyimpanan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggalPengolahan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "caraPengolahan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sertifHalal",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "verifier",
				"type": "string"
			}
		],
		"name": "step3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const contractAddress = "0x73422fB9B15f1A8CeF249f6ab3750a473F53e176"
export const privateKey = "a61642fd40b7b9450ca16ca141a3dfc695fcaa3e32550297addb5e1741f7f08a"