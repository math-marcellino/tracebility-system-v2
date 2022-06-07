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
				"internalType": "string",
				"name": "DistributorBatchID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "RPHBatchID",
				"type": "string"
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
				"internalType": "string",
				"name": "HotelBatchID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "DistributorBatchID",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "RPHBatchID",
				"type": "string"
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
		"name": "setDataPemotongan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "DistributorBatchID",
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
		"name": "setDataPengolahan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "RPHBatchID",
				"type": "string"
			},
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
		"name": "setDataPenyimpanan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "DistributorBatch",
		"outputs": [
			{
				"internalType": "string",
				"name": "RPHBatchID",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "HotelBatch",
		"outputs": [
			{
				"internalType": "string",
				"name": "DistributorBatchID",
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
			}
		],
		"name": "RPHBatch",
		"outputs": [
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
export const contractAddress = '0x5EcD358812c70BB35759F555C59ad53A3B4d850A';
export const privateKey = "a61642fd40b7b9450ca16ca141a3dfc695fcaa3e32550297addb5e1741f7f08a"