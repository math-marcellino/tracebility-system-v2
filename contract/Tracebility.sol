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
  
  // Phases      
  mapping(string => RPH) public RPHBatch;
  mapping(string => Distributor) public DistributorBatch;
  mapping(string => Hotel) public HotelBatch;

  enum StatusPengiriman {OTW, SAMPAI}

  struct RPH{
    string jenis_kelamin;
    string tanggal_pemotongan; 
    string status_pemotongan;
    string verifier;
    string sertifHalal;
  }

  event RPHTrace(
    string RPHBatchID,
    string jenis_kelamin,
    string tanggal_pemotongan,
    string status_pemotongan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Distributor{
    string RPHBatchID;
    uint256 durasi_penyimpanan;
    string cara_penyimpanan;
    string status_penyimpanan;
    string verifier;
    string sertifHalal;
  }

  event DistributorTrace(
    string DistributorBatchID,
    string RPHBatchID,
    uint256 durasi_penyimpanan,
    string cara_penyimpanan,
    string status_penyimpanan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Hotel{
    string DistributorBatchID;
    string tanggal_pengolahan;
    string cara_pengolahan;
    string verifier;
    string sertifHalal;
  }

  event HotelTrace(
    string HotelBatchID,
    string DistributorBatchID,
    string tanggal_pengolahan,
    string cara_pengolahan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  uint indexRPH;
  uint indexDistributor;
  uint indexHotel;

  function setDataPemotongan(
    string memory jenisKelamin,
    string memory tanggalPemotongan,
    string memory statusPemotongan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
      indexRPH++;
      string memory ID = string.concat("RPH", Strings.toString(indexRPH));
      RPHBatch[ID].jenis_kelamin = jenisKelamin;
      RPHBatch[ID].tanggal_pemotongan = tanggalPemotongan;
      RPHBatch[ID].status_pemotongan = statusPemotongan;
      RPHBatch[ID].sertifHalal = sertifHalal;
      RPHBatch[ID].verifier = verifier;

      emit RPHTrace(
        ID,
        RPHBatch[ID].jenis_kelamin,
        RPHBatch[ID].tanggal_pemotongan,
        RPHBatch[ID].status_pemotongan,
        RPHBatch[ID].verifier,
        RPHBatch[ID].sertifHalal,
        block.timestamp
      );
  }

  function setDataPenyimpanan(
    string memory RPHBatchID,
    uint256 durasiPenyimpanan,
    string memory caraPenyimpanan,
    string memory statusPenyimpanan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
      indexDistributor++;
      string memory ID = string.concat("DISTRIBUTOR", Strings.toString(indexDistributor));
      DistributorBatch[ID].RPHBatchID = RPHBatchID;
      DistributorBatch[ID].durasi_penyimpanan = durasiPenyimpanan;
      DistributorBatch[ID].cara_penyimpanan = caraPenyimpanan;
      DistributorBatch[ID].status_penyimpanan = statusPenyimpanan;
      DistributorBatch[ID].sertifHalal = sertifHalal;
      DistributorBatch[ID].verifier = verifier;

      emit DistributorTrace(
        ID,
        DistributorBatch[ID].RPHBatchID = RPHBatchID,
        DistributorBatch[ID].durasi_penyimpanan,
        DistributorBatch[ID].cara_penyimpanan,
        DistributorBatch[ID].status_penyimpanan,
        DistributorBatch[ID].verifier,
        DistributorBatch[ID].sertifHalal,
        block.timestamp
      );
  }

  function setDataPengolahan(
    string memory DistributorBatchID,
    string memory tanggalPengolahan,
    string memory caraPengolahan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
    indexHotel++;
    string memory ID = string.concat("HOTEL", Strings.toString(indexHotel));
    HotelBatch[ID].DistributorBatchID = DistributorBatchID;
    HotelBatch[ID].tanggal_pengolahan = tanggalPengolahan;
    HotelBatch[ID].cara_pengolahan = caraPengolahan;
    HotelBatch[ID].sertifHalal = sertifHalal;
    HotelBatch[ID].verifier = verifier;

    emit HotelTrace(
      ID,
      HotelBatch[ID].DistributorBatchID = DistributorBatchID,
      HotelBatch[ID].tanggal_pengolahan,
      HotelBatch[ID].cara_pengolahan,
      HotelBatch[ID].verifier,
      HotelBatch[ID].sertifHalal,
      block.timestamp
    );
  }
}

