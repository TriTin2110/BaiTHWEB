function kiemTraMaBN() {
        const regID = /^BN-([A-Z]){5}$/;
        var maBN = document.getElementById("maBenhNhan").value;
        let resultID = regID.test(maBN);
        if (!resultID) {
                document.getElementById("baoLoiBN").innerHTML = "Mã bệnh nhân không đúng với định dạng";
                return false;
        }
        else {
                document.getElementById("baoLoiBN").innerHTML = "";
                return true;
                submit()
        }

}
function kiemTraMK() {
        const regMK = /^(.){6,}$/
        var mk = document.getElementById("matKhau").value;
        let resultMK = regMK.test(mk);
        if (!resultMK) {
                document.getElementById("baoLoiMK").innerHTML = "Mật khẩu không đúng với định dạng";
                return false;
        }
        else {
                document.getElementById("baoLoiMK").innerHTML = "";
                return true;
                submit()
        }
}
function kiemTraNgay() {
        let d = new Date().toJSON().slice(0, 10);
        var ngayKham = document.getElementById("ngay").value;
        if (ngayKham < d) {
                document.getElementById("baoLoiNgay").innerHTML = "Ngày khám phải sau ngày hiện tại";
                return false;
        }
        else {
                document.getElementById("baoLoiNgay").innerHTML = "";
                return true;
                submit()
        }
}

function kiemTraDichVuKhamBenh() {
        var checked = document.getElementById("dichVuKhamBenh");
        if (checked.checked == true) {
                document.getElementById("baoLoiDV").innerHTML = "Giá trị phụ thu tương ứng cho 1 loại dịch vụ là 500000 đồng"
                return 50000;
        }
        else
                return 0;
}
function kiemTraDichVuDieuTri() {
        var checked = document.getElementById("dichVuDieuTri");
        if (checked.checked == true) {
                document.getElementById("baoLoiDV").innerHTML = "Giá trị phụ thu tương ứng cho 1 loại dịch vụ là 500000 đồng"
                return 50000;
        }
        else
                return 0;
}

function kiemTraDichVuBacSi() {
        var checked = document.getElementById("dichVuBacSi");
        if (checked.checked == true) {
                document.getElementById("baoLoiDV").innerHTML = "Giá trị phụ thu tương ứng cho 1 loại dịch vụ là 500000 đồng"
                return 50000;
        }
        else
                return 0;
}
function nhapSTT() {
        var stt = 1;
        document.getElementById("STT").innerHTML = stt;
}

function nhapMaBN() {
        document.getElementById("maBN").innerHTML = document.getElementById("maBenhNhan").value;
}
function nhapMK() {
        document.getElementById("matkhau").innerHTML = document.getElementById("matKhau").value
}
function ngayKham() {
        document.getElementById("ngayKham").innerHTML = document.getElementById("ngay").value
}
function dichVu() {
        kiemTraDichVuKhamBenh();
        kiemTraDichVuDieuTri();
        kiemTraDichVuBacSi();
        var tongTien = kiemTraDichVuBacSi() + kiemTraDichVuDieuTri() + kiemTraDichVuKhamBenh();
        document.getElementById("tienDV").innerHTML = tongTien;
}
function chyenKhoa() {
        document.getElementById("chuyenKhoa").innerHTML = document.getElementById("khoa").value
}
function submit() {
        kiemTraNgay();
        kiemTraMK();
        kiemTraMaBN();
        if (kiemTraMK() == true && kiemTraNgay() == true && kiemTraMaBN() == true) {
                hideModal();
        }
}
function hideModal() {
        nhapSTT();
        nhapMaBN();
        nhapMK();
        ngayKham();
        dichVu();
        chyenKhoa();
        $("#myModal").modal('hide');
        alert("Đã đặt lịch thành công!");
}
