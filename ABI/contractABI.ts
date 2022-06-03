export const jsonABI = [
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
				"name": "batchID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "durasi_penyimpanan",
				"type": "uint256"
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
				"name": "batchID",
				"type": "uint256"
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
		"name": "HotelTrace",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Code",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggalPenerimaan",
				"type": "string"
			}
		],
		"name": "penerimaan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "batchID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Code",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggalPengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tujuan",
				"type": "string"
			}
		],
		"name": "pengiriman",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchID",
				"type": "uint256"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "durasiPenyimpanan",
				"type": "uint256"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "DistributorBatch",
		"outputs": [
			{
				"internalType": "string",
				"name": "Code",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "durasi_penyimpanan",
				"type": "uint256"
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
				"internalType": "string",
				"name": "Code",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PengirimanBatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "batchID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tanggal_pengiriman",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tanggal_penerimaan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tujuan",
				"type": "string"
			},
			{
				"internalType": "enum TraceabilityV2.StatusPengiriman",
				"name": "status",
				"type": "uint8"
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
				"internalType": "string",
				"name": "Code",
				"type": "string"
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
	}
]
export const contractAddress = "0x1A728f4274bd97371d27CE59F9D0186ff1959fD4"
export const privateKey = "a61642fd40b7b9450ca16ca141a3dfc695fcaa3e32550297addb5e1741f7f08a"