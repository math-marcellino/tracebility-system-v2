// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Strings.sol";

contract TraceabilityV2{
  address owner;
  
  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "You are not the owner!");
    _;
  }

  struct Pemotongan{
    string ID_RPH;
    string jenis_kelamin;
    string tanggal_pemotongan; 
    string status_kehalalan;
  }

  struct ProdukRPH{
    string ID_Pemotongan;
    string nama;
    string status_kehalalan;
  }

  struct ProdukDistributor{
    string ID_Distributor;
    string ID_ProdukRPH;
    string nama;
    uint256 durasi_penyimpanan;
    string cara_penyimpanan;
    string status_kehalalan;
  }

  struct Makanan{
    string ID_Hotel;
    string ID_ProdukDistributor;
    string nama;
    string tanggal_pengolahan;
    string cara_pengolahan;
    string status_kehalalan;
  }

  // Mappings 
  mapping(string => Pemotongan) public PemotonganBatch;
  mapping(string => ProdukRPH) public ProdukRPHBatch;
  mapping(string => ProdukDistributor) public ProdukDistributorBatch;
  mapping(string => Makanan) public MakananBatch;

  // Events to trace data
  event TracePemotongan(
    string ID_Pemotongan,
    string ID_RPH,
    string jenis_kelamin,
    string tanggal_pemotongan,
    string status_kehalalan,
    uint256 date
  );

  event TraceProdukRPH(
    string ID_ProdukRPH,
    string ID_Pemotongan,
    string nama,
    string status_kehalalan,
    uint256 date
  );
  
  event TraceProdukDistributor(
    string ID_ProdukDistributor,
    string ID_Distributor,
    string ID_ProdukRPH,
    string nama,
    uint256 durasi_penyimpanan,
    string cara_penyimpanan,
    string status_kehalalan,
    uint256 date
  );

  event TraceMakanan(
    string ID_Makanan,
    string ID_Hotel,
    string ID_ProdukDistributor,
    string nama,
    string tanggal_pengolahan,
    string cara_pengolahan,
    string status_kehalalan,
    uint256 date
  );

  // Index to create new ID
  uint index_pemotongan;
  uint index_produkRPH;
  uint index_produkDistributor;
  uint index_makanan;

  function setDataPemotongan(
    string memory _ID_RPH,
    string memory _jenisKelamin,
    string memory _tanggalPemotongan,
    string memory _statusKehalalan
  ) public onlyOwner {
    index_pemotongan++;
    string memory ID = string.concat("PMTG", Strings.toString(index_pemotongan));
    PemotonganBatch[ID].ID_RPH = _ID_RPH;
    PemotonganBatch[ID].jenis_kelamin = _jenisKelamin;
    PemotonganBatch[ID].tanggal_pemotongan = _tanggalPemotongan;
    PemotonganBatch[ID].status_kehalalan = _statusKehalalan;

    emit TracePemotongan(
      ID,
      _ID_RPH,
      _jenisKelamin,
      _tanggalPemotongan,
      _statusKehalalan,
      block.timestamp
    );
  }

  function setDataProdukRPH(
    string memory _ID_Pemotongan,
    string memory _nama,
    string memory _statusKehalalan
  ) public onlyOwner {
    require(keccak256(abi.encodePacked((PemotonganBatch[_ID_Pemotongan].status_kehalalan))) != keccak256(abi.encodePacked((""))), "Data Pemotongan Tidak Terdaftar");
    index_produkRPH++;
    string memory ID = string.concat("PRPH", Strings.toString(index_produkRPH));
    ProdukRPHBatch[ID].ID_Pemotongan = _ID_Pemotongan;
    ProdukRPHBatch[ID].nama = _nama;
    ProdukRPHBatch[ID].status_kehalalan = _statusKehalalan;

    emit TraceProdukRPH(
      ID,
      _ID_Pemotongan,
      _nama,
      _statusKehalalan,
      block.timestamp
    );
  }

  function setDataProdukDistributor(
    string memory _ID_Distributor,
    string memory _ID_ProdukRPH,
    string memory _nama,
    uint256 _durasiPenyimpanan,
    string memory _caraPenyimpanan,
    string memory _statusKehalalan
  ) public onlyOwner {
    require(keccak256(abi.encodePacked((ProdukRPHBatch[_ID_ProdukRPH].status_kehalalan))) != keccak256(abi.encodePacked((""))), "Data Produk RPH Tidak Terdaftar");
    index_produkDistributor++;
    string memory ID = string.concat("PDIS", Strings.toString(index_produkDistributor));
    ProdukDistributorBatch[ID].ID_Distributor = _ID_Distributor;
    ProdukDistributorBatch[ID].ID_ProdukRPH = _ID_ProdukRPH;
    ProdukDistributorBatch[ID].nama = _nama;
    ProdukDistributorBatch[ID].durasi_penyimpanan = _durasiPenyimpanan;
    ProdukDistributorBatch[ID].cara_penyimpanan = _caraPenyimpanan;
    ProdukDistributorBatch[ID].status_kehalalan = _statusKehalalan;

    emit TraceProdukDistributor(
      ID,
      _ID_Distributor,
      _ID_ProdukRPH,
      _nama,
      _durasiPenyimpanan,
      _caraPenyimpanan,
      _statusKehalalan,
      block.timestamp
    );
  }

  function setDataMakanan(
    string memory _ID_Hotel,
    string memory _ID_ProdukDistributor,
    string memory _nama,
    string memory _tanggalPengolahan,
    string memory _caraPengolahan,
    string memory _statusKehalalan
  ) public onlyOwner {
    require(keccak256(abi.encodePacked((ProdukDistributorBatch[_ID_ProdukDistributor].status_kehalalan))) != keccak256(abi.encodePacked((""))), "Data Produk Distributor Tidak Terdaftar");
    index_makanan++;
    string memory ID = string.concat("PMKN", Strings.toString(index_makanan));
    MakananBatch[ID].ID_Hotel = _ID_Hotel;
    MakananBatch[ID].ID_ProdukDistributor = _ID_ProdukDistributor;
    MakananBatch[ID].nama = _nama;
    MakananBatch[ID].tanggal_pengolahan = _tanggalPengolahan;
    MakananBatch[ID].cara_pengolahan = _caraPengolahan;
    MakananBatch[ID].status_kehalalan = _statusKehalalan;

    emit TraceMakanan(
      ID,
      _ID_Hotel,
      _ID_ProdukDistributor,
      _nama,
      _tanggalPengolahan,
      _caraPengolahan,
      _statusKehalalan,
      block.timestamp
    );
  }
}