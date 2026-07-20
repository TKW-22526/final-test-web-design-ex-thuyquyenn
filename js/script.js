const dsCay = {

    1:{
        ten:"Cây Kim Tiền",
        gia:"350.000 VNĐ",
        hinh:"../assets/images/kimtien.jpg",
        moTa:"Cây Kim Tiền tượng trưng cho tài lộc, may mắn và thịnh vượng."
    },

    2:{
        ten:"Cây Kim Ngân",
        gia:"280.000 VNĐ",
        hinh:"../assets/images/kimngan.jpg",
        moTa:"Cây Kim Ngân mang ý nghĩa giàu sang, phú quý và phát triển."
    },

    3:{
        ten:"Cây Ngọc Ngân",
        gia:"250.000 VNĐ",
        hinh:"../assets/images/ngocngan.jpg",
        moTa:"Cây Ngọc Ngân có màu sắc đẹp mắt, tượng trưng cho may mắn."
    },

    4:{
        ten:"Cây Phát Tài",
        gia:"300.000 VNĐ",
        hinh:"../assets/images/phattai.jpg",
        moTa:"Cây Phát Tài thường được trồng trong nhà và văn phòng."
    },

    5:{
        ten:"Cây Lan Ý",
        gia:"320.000 VNĐ",
        hinh:"../assets/images/lany.jpg",
        moTa:"Cây Lan Ý giúp thanh lọc không khí và mang ý nghĩa bình an."
    },

    6:{
        ten:"Cây Lưỡi Hổ",
        gia:"250.000 VNĐ",
        hinh:"../assets/images/luoiho.jpg",
        moTa:"Cây Lưỡi Hổ có khả năng lọc không khí rất tốt."
    },

    7:{
        ten:"Cây Trầu Bà",
        gia:"180.000 VNĐ",
        hinh:"../assets/images/trauba.jpg",
        moTa:"Cây Trầu Bà dễ chăm sóc, phù hợp với không gian văn phòng."
    },

    8:{
        ten:"Cây Vạn Niên Thanh",
        gia:"220.000 VNĐ",
        hinh:"../assets/images/vannienthanh.jpg",
        moTa:"Cây Vạn Niên Thanh mang ý nghĩa trường tồn và bền vững."
    },

    9:{
        ten:"Cây Bàng Singapore",
        gia:"450.000 VNĐ",
        hinh:"../assets/images/bangsingapore.jpg",
        moTa:"Cây Bàng Singapore được ưa chuộng trong thiết kế nội thất hiện đại."
    },

    10:{
        ten:"Cây Cau Tiểu Trâm",
        gia:"150.000 VNĐ",
        hinh:"../assets/images/cautieutram.jpg",
        moTa:"Cây Cau Tiểu Trâm nhỏ gọn, thích hợp đặt trên bàn làm việc."
    },

    11:{
        ten:"Cây Sen Đá",
        gia:"80.000 VNĐ",
        hinh:"../assets/images/senda.jpg",
        moTa:"Cây Sen Đá tượng trưng cho sự kiên trì và bền bỉ."
    },

    12:{
        ten:"Cây Xương Rồng",
        gia:"60.000 VNĐ",
        hinh:"../assets/images/xuongrong.jpg",
        moTa:"Cây Xương Rồng có sức sống mạnh mẽ và dễ chăm sóc."
    },

    13:{
        ten:"Cây Hoa Hồng Mini",
        gia:"90.000 VNĐ",
        hinh:"../assets/images/minihoahong.jpg",
        moTa:"Cây Hoa Hồng Mini mang vẻ đẹp nhẹ nhàng và lãng mạn."
    },

    14:{
        ten:"Cây Cẩm Nhung",
        gia:"70.000 VNĐ",
        hinh:"../assets/images/camnhung.jpg",
        moTa:"Cây Cẩm Nhung có lá đẹp, phù hợp trang trí bàn học và bàn làm việc."
    },

    15:{
        ten:"Cây Trường Sinh",
        gia:"120.000 VNĐ",
        hinh:"../assets/images/truongsinh.jpg",
        moTa:"Cây Trường Sinh tượng trưng cho sức khỏe và sự trường thọ."
    }

};

const thamSo = new URLSearchParams(window.location.search);

const id = thamSo.get("id");

const cay = dsCay[id];

const chiTiet = document.getElementById("chi-tiet");

if(chiTiet && cay){

   chiTiet.innerHTML = `
<div class="chi-tiet-cay">

    <img src="${cay.hinh}" alt="${cay.ten}">

    <h2>${cay.ten}</h2>

    <p class="gia">${cay.gia}</p>

    <p>${cay.moTa}</p>

    <div class="khung-quay-lai">
        <a href="san-pham.html">← Quay lại</a>
    </div>

</div>
`;

}