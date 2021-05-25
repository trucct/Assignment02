var soTienVay, thoiGianVay, laiSuat, laiSuatPhanTram, ngayGiaiNgan, soGocConLai, gocPhaiTra, laiPhaiTra, soTienPhaiTraHangThang;

function Calculate(){
    soTienVay = document.getElementById("soTienVay").value;
    thoiGianVay = document.getElementById("thoiGianVay").value;
    laiSuat = document.getElementById("laiSuat").value;
    ngayGiaiNgan = document.getElementById("ngayGiaiNgan").value;


    // Đổi lãi suất về giá trị %
    laiSuatPhanTram = laiSuat / 100

    soGocConLai = soTienVay;
    
   for(var i = 0; i < thoiGianVay; i++){   
         gocPhaiTra = Math.round(soTienVay / thoiGianVay)
         laiPhaiTra = Math.round(soGocConLai * laiSuatPhanTram / 12)
         soGocConLai = Math.round(soGocConLai  - gocPhaiTra) 
         soTienPhaiTraHangThang = Math.round(laiPhaiTra + gocPhaiTra)
         alert("Trong tháng này: \nSố gốc còn lại là: " + soGocConLai + " " + "Số gốc phải trả là: " + gocPhaiTra + " " + "Tiền lãi phải trả hàng tháng là : " + laiPhaiTra + " " + "Số tiền phải trả trong tháng nay là: " + soTienPhaiTraHangThang)
    }
}

