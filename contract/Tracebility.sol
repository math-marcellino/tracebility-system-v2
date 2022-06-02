// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract TraceabilityV2 is AccessControl{
  constructor() {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }
  
  // Phases    
  enum SupplyChainSteps{Step1, Step2, Step3}

  mapping(uint => RPH) public RPHBatch;
  mapping(uint => Distributor) public DistributorBatch;
  mapping(uint => Hotel) public HotelBatch;

  struct RPH{
    uint256 itemID;
    TraceabilityV2.SupplyChainSteps step;
    string jenis_kelamin;
    string tanggal_pemotongan;
    string status_pemotongan;
    string verifier;
    string sertifHalal;
  }

  event RPHTrace(
    uint256 itemID,
    TraceabilityV2.SupplyChainSteps step,
    string jenis_kelamin,
    string tanggal_pemotongan,
    string status_pemotongan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Distributor{
    uint256 itemID;
    TraceabilityV2.SupplyChainSteps step;
    string tanggal_pengiriman;
    string status_pengiriman;
    string verifier;
    string sertifHalal;
  }

  event DistributorTrace(
    uint256 itemID,
    TraceabilityV2.SupplyChainSteps step,
    string tanggal_pengiriman,
    string status_pengiriman,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  event HotelTrace(
    uint itemID,
    TraceabilityV2.SupplyChainSteps step,
    string durasi_penyimpanan,
    string cara_penyimpanan,
    string status_penyimpanan,
    string tanggal_pengolahan,
    string cara_pengolahan,
    string sertifHalal,
    string verifier,    
    uint _time
  );
  
  struct Hotel{
    uint256 itemID;
    TraceabilityV2.SupplyChainSteps step;
    string durasi_penyimpanan;
    string cara_penyimpanan;
    string status_penyimpanan;
    string tanggal_pengolahan;
    string cara_pengolahan;
    string verifier;
    string sertifHalal;
  }

  uint index;

  function createItem(
    string memory jenisKelamin,
    string memory tanggalPemotongan,
    string memory statusPemotongan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyRole(DEFAULT_ADMIN_ROLE) {
      index++;
      RPHBatch[index].itemID = index;
      RPHBatch[index].step = SupplyChainSteps.Step1;
      RPHBatch[index].jenis_kelamin = jenisKelamin;
      RPHBatch[index].tanggal_pemotongan = tanggalPemotongan;
      RPHBatch[index].status_pemotongan = statusPemotongan;
      RPHBatch[index].sertifHalal = sertifHalal;
      RPHBatch[index].verifier = verifier;

      emit RPHTrace(
        RPHBatch[index].itemID,
        RPHBatch[index].step,
        RPHBatch[index].jenis_kelamin,
        RPHBatch[index].tanggal_pemotongan,
        RPHBatch[index].status_pemotongan,
        RPHBatch[index].sertifHalal,
        RPHBatch[index].verifier,
        block.timestamp
      );
  }

  function step2(
    uint256 itemID,
    string memory tanggalPengiriman,
    string memory statusPengiriman,
    string memory sertifHalal,
    string memory verifier
  ) public onlyRole(DEFAULT_ADMIN_ROLE) {
      require(RPHBatch[itemID].itemID > 0, "Bahan belum memenuhi syarat");
      require(DistributorBatch[itemID].itemID <= 0, "Tidak dapat mengubah data");
      DistributorBatch[itemID].itemID = itemID;
      DistributorBatch[itemID].step = SupplyChainSteps.Step2;
      DistributorBatch[itemID].tanggal_pengiriman = tanggalPengiriman;
      DistributorBatch[itemID].status_pengiriman = statusPengiriman;
      DistributorBatch[itemID].sertifHalal = sertifHalal;
      DistributorBatch[itemID].verifier = verifier;

      emit DistributorTrace(
        DistributorBatch[itemID].itemID,
        DistributorBatch[itemID].step,
        DistributorBatch[itemID].tanggal_pengiriman,
        DistributorBatch[itemID].status_pengiriman,
        DistributorBatch[itemID].sertifHalal,
        DistributorBatch[itemID].verifier,
        block.timestamp
      );
  }
  
  function step3(
    uint256 itemID,
    string memory durasiPenyimpanan,
    string memory caraPenyimpanan,
    string memory statusPenyimpanan,
    string memory tanggalPengolahan,
    string memory caraPengolahan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(DistributorBatch[itemID].itemID > 0, "Bahan belum memenuhi syarat");
    require(HotelBatch[itemID].itemID <= 0, "Tidak dapat mengubah data");
    uint256 item = itemID;
    HotelBatch[item].itemID = itemID;
    HotelBatch[item].step = SupplyChainSteps.Step3;   
    HotelBatch[item].durasi_penyimpanan = durasiPenyimpanan;
    HotelBatch[item].cara_penyimpanan = caraPenyimpanan;
    HotelBatch[item].status_penyimpanan = statusPenyimpanan;
    HotelBatch[item].tanggal_pengolahan = tanggalPengolahan;
    HotelBatch[item].cara_pengolahan = caraPengolahan;
    HotelBatch[item].sertifHalal = sertifHalal;
    HotelBatch[item].verifier = verifier;

    emit HotelTrace(
      HotelBatch[item].itemID,
      HotelBatch[item].step,
      HotelBatch[item].durasi_penyimpanan,
      HotelBatch[item].cara_penyimpanan,
      HotelBatch[item].status_penyimpanan,
      HotelBatch[item].tanggal_pengolahan,
      HotelBatch[item].cara_pengolahan,
      HotelBatch[item].sertifHalal,
      HotelBatch[item].verifier,
      block.timestamp
    );
  }

  function checkRPH(uint256 item) public view returns(uint256){
    return RPHBatch[item].itemID;
  }

  function checkDistributor(uint256 item) public view returns(uint256){
    return HotelBatch[item].itemID;
  }

  function checkHotel(uint256 item) public view returns(uint256){
    return DistributorBatch[item].itemID;
  }
}

