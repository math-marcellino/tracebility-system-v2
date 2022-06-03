// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

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
  mapping(uint => RPH) public RPHBatch;
  mapping(uint => Distributor) public DistributorBatch;
  mapping(uint => Hotel) public HotelBatch;
  mapping(string => Pengiriman[]) public PengirimanBatch;

  enum StatusPengiriman {OTW, SAMPAI}

  struct RPH{
    string Code;
    string jenis_kelamin;
    string tanggal_pemotongan; 
    string status_pemotongan;
    string verifier;
    string sertifHalal;
  }

  event RPHTrace(
    uint256 batchID,
    string jenis_kelamin,
    string tanggal_pemotongan,
    string status_pemotongan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Distributor{
    string Code;
    uint256 durasi_penyimpanan;
    string cara_penyimpanan;
    string status_penyimpanan;
    string verifier;
    string sertifHalal;
  }

  event DistributorTrace(
    uint256 batchID,
    uint256 durasi_penyimpanan,
    string cara_penyimpanan,
    string status_penyimpanan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Hotel{
    string Code;
    string tanggal_pengolahan;
    string cara_pengolahan;
    string verifier;
    string sertifHalal;
  }

  event HotelTrace(
    uint256 batchID,
    string tanggal_pengolahan,
    string cara_pengolahan,
    string verifier,
    string sertifHalal,
    uint256 time
  );

  struct Pengiriman{
    uint256 batchID;
    string tanggal_pengiriman;
    string tanggal_penerimaan;
    string tujuan;
    StatusPengiriman status;
  }
  
  uint indexRPH;
  uint indexDistributor;
  uint indexHotel;
  uint indexPengiriman;

  function createItem(
    string memory jenisKelamin,
    string memory tanggalPemotongan,
    string memory statusPemotongan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
      indexRPH++;
      RPHBatch[indexRPH].Code = "RPH";
      RPHBatch[indexRPH].jenis_kelamin = jenisKelamin;
      RPHBatch[indexRPH].tanggal_pemotongan = tanggalPemotongan;
      RPHBatch[indexRPH].status_pemotongan = statusPemotongan;
      RPHBatch[indexRPH].sertifHalal = sertifHalal;
      RPHBatch[indexRPH].verifier = verifier;

      emit RPHTrace(
        indexRPH,
        RPHBatch[indexRPH].jenis_kelamin,
        RPHBatch[indexRPH].tanggal_pemotongan,
        RPHBatch[indexRPH].status_pemotongan,
        RPHBatch[indexRPH].sertifHalal,
        RPHBatch[indexRPH].verifier,
        block.timestamp
      );
  }

  function step2(
    uint256 durasiPenyimpanan,
    string memory caraPenyimpanan,
    string memory statusPenyimpanan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
      indexDistributor++;
      DistributorBatch[indexDistributor].Code = "Distributor";
      DistributorBatch[indexDistributor].durasi_penyimpanan = durasiPenyimpanan;
      DistributorBatch[indexDistributor].cara_penyimpanan = caraPenyimpanan;
      DistributorBatch[indexDistributor].status_penyimpanan = statusPenyimpanan;
      DistributorBatch[indexDistributor].sertifHalal = sertifHalal;
      DistributorBatch[indexDistributor].verifier = verifier;

      emit DistributorTrace(
        indexDistributor++,
        DistributorBatch[indexDistributor].durasi_penyimpanan,
        DistributorBatch[indexDistributor].cara_penyimpanan,
        DistributorBatch[indexDistributor].status_penyimpanan,
        DistributorBatch[indexDistributor].sertifHalal,
        DistributorBatch[indexDistributor].verifier,
        block.timestamp
      );
  }

  function step3(
    string memory tanggalPengolahan,
    string memory caraPengolahan,
    string memory sertifHalal,
    string memory verifier
  ) public onlyOwner {
    indexHotel++;
    HotelBatch[indexHotel].Code = "Hotel";
    HotelBatch[indexHotel].tanggal_pengolahan = tanggalPengolahan;
    HotelBatch[indexHotel].cara_pengolahan = caraPengolahan;
    HotelBatch[indexHotel].sertifHalal = sertifHalal;
    HotelBatch[indexHotel].verifier = verifier;

    emit HotelTrace(
      indexHotel,
      HotelBatch[indexHotel].tanggal_pengolahan,
      HotelBatch[indexHotel].cara_pengolahan,
      HotelBatch[indexHotel].sertifHalal,
      HotelBatch[indexHotel].verifier,
      block.timestamp
    );
  }

  function pengiriman(
    uint256 batchID,
    string memory Code,
    string memory tanggalPengiriman,
    string memory tujuan
  ) public onlyOwner {
    indexPengiriman++;
    
    Pengiriman memory temp;
    temp.batchID = batchID;
    temp.tanggal_pengiriman = tanggalPengiriman;
    temp.tujuan = tujuan;

    PengirimanBatch[Code].push(temp);
  }  

  function penerimaan(
    uint256 index,
    string memory Code,
    string memory tanggalPenerimaan
  ) public onlyOwner {
    PengirimanBatch[Code][index].tanggal_penerimaan = tanggalPenerimaan;
  }
}

