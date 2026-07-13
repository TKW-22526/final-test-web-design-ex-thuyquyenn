const products = {
    1: {
        name: "Ánh dương",
        price: "50.000 VNĐ/chậu",
        image: "../assets/images/anhduong.jpg",
        desc: "Cây Ánh Dương có hoa vàng tươi đẹp mắt, tượng trưng cho sự may mắn, hy vọng và sức sống mạnh mẽ. Cây dễ chăm sóc, thích hợp trang trí sân vườn và ban công."
    },

    2: {
        name: "Cẩm tú cầu",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/camtucau.jpg",
        desc: "Giống này phù hợp miền Nam, chỉ cần giữ ẩm và tưới đều cho cây tự xanh."
    },

    3: {
        name: "Cẩm tú mai",
        price: "60.000 VNĐ/chậu",
        image: "../assets/images/camtumai.jpg",
        desc: "Cây Cẩm Tú Mai nổi bật với những chùm hoa tím hồng nhỏ xinh, tượng trưng cho sự nhẹ nhàng và may mắn. Cây dễ chăm sóc, thích hợp trang trí sân vườn, ban công và không gian sống."
    },

    4: {
        name: "Cau tiểu trâm",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/cautieutram.jpg",
        desc: "Dáng đẹp, dễ chăm, hợp trồng trong nhà, Cây ưa ánh sáng hãy cho cây hấp thụ ánh sáng nhiều chút nha."
    },

    5: {
        name: "Cúc sao băng",
        price: "60.000 VNĐ/chậu",
        image: "../assets/images/cucsaobang.jpg",
        desc: "Chịu được nắng, dễ trồng, siêu bền, nên tưới thường xuyên."
    },

    6: {
        name: "Dâm bụt thái",
        price: "50.000 VNĐ/chậu",
        image: "../assets/images/dambutthaic.jpg",
        desc: "Cây Dâm Bụt Thái có hoa to, nhiều màu sắc đẹp mắt và nở quanh năm. Cây dễ chăm sóc, thích hợp trang trí sân vườn, ban công và mang đến vẻ đẹp nổi bật cho không gian sống."
    },

    7: {
        name: "Dành dành",
        price: "90.000 VNĐ/chậu",
        image: "../assets/images/danhdanh.jpg",
        desc: "Hương thơm từ hoa phát ra như mùi nước hoa cao cấp mà thiên nhiên, chỉ cần 1 bông nở là đủ thơm từ nhà ra ngõ rồi."
    },

    8: {
        name: "Dạ yến thảo",
        price: "60.000 VNĐ/chậu",
        image: "../assets/images/dayenthao.jpg",
        desc: "Cây Dạ Yến Thảo có hoa đẹp với nhiều màu sắc đa dạng, nở liên tục và dễ chăm sóc. Cây thích hợp trang trí ban công, sân vườn và tạo điểm nhấn nổi bật cho không gian sống."
    },

    9: {
        name: "Đinh hương Nhật Bản",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/dinhhuongnhat.jpg",
        desc: "Có vẻ đẹp tiểu thư, mùi hương sang trọng, là sự giao thoa hoàn hảo cho sân vườn hiện đại."
    },

    10: {
        name: "Hoa giấy mix màu",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/hoagiaymixmau.jpg",
        desc: "Hoa Giấy Mix Màu sở hữu nhiều sắc hoa nổi bật trên cùng một cây, nở quanh năm và dễ chăm sóc. Cây thích hợp trang trí sân vườn, cổng nhà và ban công, mang đến vẻ đẹp rực rỡ cho không gian sống."
    },

    11: {
        name: "Hồng anh",
        price: "50.000 VNĐ/chậu",
        image: "../assets/images/hoahonganh.jpg",
        desc: "Ra hoa rực rỡ cây nửa leo, màu sắc nổi bật nhẹ nhàng, dễ tạo điểm nhấn cho hàng rào."
    },

    12: {
        name: "Huỳnh anh",
        price: "50.000 VNĐ/chậu",
        image: "../assets/images/hoahuynhanh.jpg",
        desc: "Dây sống khỏe dù đất khô hạn. Hoa vàng rực rỡ quanh năm, càng nắng càng nhiều nụ, trồng dọc hàng rào là chuẩn bài."
    },

    13: {
        name: "Thanh xà",
        price: "80.000 VNĐ/chậu",
        image: "../assets/images/hoathanhxa.jpg",
        desc: "Cây nở đều đặng mỗi tuần, ra hoa quanh năm nên khu vườn lúc nào cũng đẹp mà chẳng cần đợi mùa."
    },

    14: {
        name: "Hoa trang",
        price: "80.000 VNĐ/chậu",
        image: "../assets/images/hoatrang.jpg",
        desc: "Nắng càng gắt cây càng khỏe, phù hợp vùng đất kho cằn, cây ra hoa liên tục, hoa bền cả tháng mà không rụng nhiều. không cần chăm vẫn đẹp."
    },

    15: {
        name: "Hồng môn",
        price: "90.000 VNĐ/chậu",
        image: "../assets/images/hongmon.jpg",
        desc: "Hoa đỏ rực rỡ, tượng trưng cho tài lộc và sự nhiệt huyết. Cây phù hợp đặt ở phòng khách hoặc phòng ăn."
    },

    16: {
        name: "Hồng tỉ muội",
        price: "110.000 VNĐ/chậu",
        image: "../assets/images/hongtimuoi.jpg",
        desc: "Thân nhỏ, hoa nhiều, ra bông quanh năm nếu đủ nắng nhẹ, dễ trồng nhất trong họ nhà hồng."
    },

    17: {
        name: "Kim tiền",
        price: "200.000 VNĐ/chậu",
        image: "../assets/images/kimtien.jpg",
        desc: "Tượng trưng cho tài lộc và mây mắn.Lá cây xanh đậm, dày và khỏe, thích hợp đặt ở phòng khách hoặc phòng làm việc, giúp tăng tài khí và sinh khí cho không gian sống."
    },

    18: {
        name: "Lan chi",
        price: "25.000 VNĐ/chậu",
        image: "../assets/images/lanchi.jpg",
        desc: "Dễ chăm, ưa bóng nhẹ, trồng trong nhà tốt, đất khô mới tưới không tưới quá nhiều nhé."
    },

    19: {
        name: "Lan hồ điệp",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/lanhodiep.jpg",
        desc: "Dáng đẹp, hoa thơm, chỉ rễ khô mới tưới tránh làm úng lan."
    },

    20: {
        name: "Lan quân tử",
        price: "70.000 VNĐ/chậu",
        image: "../assets/images/lanquantu.jpg",
        desc: "Tượng trưng cho gia đình hòa thuận, sự nghiệp thành công."
    },

    21: {
        name: "Lan tỏi",
        price: "40.000 VNĐ/chậu",
        image: "../assets/images/lantoi.jpg",
        desc: "Chịu dược nắng, dễ trồng, nhiều hoa. cây nhỏ vẫn cho ra nhiều hoa, bền bỉ, trồng leo theo lan can rất đẹp."
    },

    22: {
        name: "Lan ý",
        price: "80.000 VNĐ/chậu",
        image: "../assets/images/lany.jpg",
        desc: "Cây xanh quanh năm, lá đẹp, mang ý nghĩa tài lộc."
    },

    23: {
        name: "Lưỡi hổ",
        price: "40.000 VNĐ/chậu",
        image: "../assets/images/luoiho.jpg",
        desc: "Mang ý nghĩa đổi vận, tài lộc dồi dào, hợp đặt phòng khách hoặc phòng làm việc."
    },

    24: {
        name: "mai vạn phúc",
        price: "80.000 VNĐ/chậu",
        image: "../assets/images/maivanphuc.jpg",
        desc: "Cây Mai Vạn Phúc có hoa trắng nhỏ xinh, nở quanh năm và mang vẻ đẹp thanh nhã. Cây dễ chăm sóc, thích hợp trang trí sân vườn, ban công và tạo không gian xanh mát cho ngôi nhà."
    },

    25: {
        name: "Nguyệt quế",
        price: "70.000 VNĐ/chậu",
        image: "../assets/images/nguyetque.jpg",
        desc: "Hương dịu nở đều bốn mùa, không chỉ có mùi hơm thanh thoát, mà còn được xem là loài hoa thu hút tài kí, thích hợp trồng trước nhà gần cổng."
    },

    26: {
        name: "Hoa pansy",
        price: "50.000 VNĐ/chậu",
        image: "../assets/images/pansy.jpg",
        desc: "Hoa Pansy có màu sắc đa dạng, cánh hoa đẹp mắt và nở bền. Cây thích hợp trang trí sân vườn, ban công và tạo điểm nhấn nổi bật cho không gian sống."
    },

    27: {
        name: "Phát tài",
        price: "60.000 VNĐ/chậu",
        image: "../assets/images/phattai.jpg",
        desc: "Cây tượng trưng tài lộc dồi dào, giàu sang đầy nhà cây chieu tài cho không gian sống."
    },

    28: {
        name: "Bông sen",
        price: "120.000 VNĐ/chậu",
        image: "../assets/images/sen.jpg",
        desc: "Hoa Sen có vẻ đẹp thanh tao, hương thơm nhẹ nhàng và mang ý nghĩa về sự thuần khiết, bình an. Cây thích hợp trồng trong hồ nước hoặc tiểu cảnh, giúp không gian thêm đẹp và thư giãn."
    },

    29: {
        name: "Sống đời",
        price: "70.000 VNĐ/chậu",
        image: "../assets/images/songdoi.jpg",
        desc: "Hoa Sống Đời có màu sắc rực rỡ, dễ chăm sóc và nở hoa lâu. Cây mang ý nghĩa may mắn, sức khỏe và thích hợp trang trí không gian sống."
    },

    30: {
        name: "Sử quân tử",
        price: "120.000 VNĐ/chậu",
        image: "../assets/images/suquantu.jpg",
        desc: "Chùm hoa kẹo ngọt, vừa che nắng tốt lại vừa dễ chiều không cần tưới tắm cầu kì."
    },

    31: {
        name: "Thiên điểu",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/thiendieu.jpg",
        desc: "Cây hợp trồng dọc đường vườn nhà, hoa nở như con chim đang ngẫn cao đầu rất trừu tượng rất đẹp."
    },

    32: {
        name: "Thiết mộc lan",
        price: "150.000 VNĐ/chậu",
        image: "../assets/images/thietmoclan.jpg",
        desc: "Cây nội thất phổ biến, dễ chăm, sônngs khỏe, chịu được nhiều điều kiện thời tiết."
    },

    33: {
        name: "Trầu bà",
        price: "100.000 VNĐ/chậu",
        image: "../assets/images/trauba.jpg",
        desc: "Monstera là loại cây nội thất hiện đại, phù hợp trang trí phòng khách."
    },

    34: {
        name: "Hoa triệu chuông",
        price: "80.000 VNĐ/chậu",
        image: "../assets/images/trieuchuong.jpg",
        desc: "Ra hoa quanh năm, phù hợp với chậu treo ở ban công, cửa sổ. Càng nắng càng nở rộ, mỗi cây có thể phủ kín chậu bằng nhiều bông nhỏ xinh."
    },

    35: {
        name: "Tùng thơm",
        price: "75.000 VNĐ/chậu",
        image: "../assets/images/tungthom.jpg",
        desc: "Có hương thơm pha trộn giữa chanh và bạc hà. Cây xanh quanh năm thích hợp đặt trong phòng khách."
    },

    36: {
        name: "Vạn lộc",
        price: "90.000 VNĐ/chậu",
        image: "../assets/images/vanloc.jpg",
        desc: "Cây Vạn Lộc có màu sắc tươi đẹp, mang ý nghĩa may mắn và tài lộc. Cây thích hợp trang trí không gian sống và làm việc."
    },

    37: {
        name: "Vạn niên thanh",
        price: "60.000 VNĐ/chậu",
        image: "../assets/images/vannienthanh.jpg",
        desc: "Cây dễ chăm, chịu bóng tốt, trồng trong nhà, tránh nắng gắt hè giữ ẩm."
    },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const khungChiTiet = document.getElementById("chi-tiet-san-pham");

if (khungChiTiet && products[id]) {

    khungChiTiet.innerHTML = `

        <div class="hop-san-pham">

            <div class="anh-san-pham">
                <img src="${products[id].image}" alt="${products[id].name}">
            </div>

            <div class="thong-tin-san-pham">

                <h2>${products[id].name}</h2>

                <p class="gia">
                    ${products[id].price}
                </p>

                <p class="mo-ta">
                    ${products[id].desc}
                </p>

                <button class="nut-mua" onclick="muaHang()">
                    Mua ngay
                </button>

            </div>

        </div>

    `;
}

function muaHang() {
    alert("Cảm ơn bạn đã đặt hàng tại Green Garden!");
}