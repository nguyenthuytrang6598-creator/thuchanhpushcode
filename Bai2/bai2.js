//# Bài 2: String & Number methods

//mật khẩu ko được < 8 và không được lớn hơn 16
/*const matKhauKhongHopLe = '12345'
const viPhamDoDai = (matKhauKhongHopLe.length <8|| matKhauKhongHopLe.length >16)
if (viPhamDoDai){
    console.log ('Loi mat khau khong du dai');
}
console.log ('Do dai của mat khau la: ${matKhauKhongHopLe.length}')
*/

/*const tuKhoaTimKiem = 'Iphone 17'
const tieuDeSanPhamUI = 'Apple Iphone 17'
const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase()) //đồng bộ về dạng lowercase
//includes: sẽ trả về giá trị boolean
console.log(tieuDeSanPhamUI.toLowerCase())
console.log(coChuaTuKhoa)
if(coChuaTuKhoa){
    console.log('Test Pass')
}
*/

// HÀM trim: lấy kí tự trên web về thì nên dùng trim 
// const tenNguoiDungUI = ' Nguyen Van A'
// const tenNguoiDungMongDoi = 'Nguyen Van A'
// const tenDaTrim = tenNguoiDungUI.trim()
// // console.log(`ten da trim:${tenDaTrim}`);

// # HÀM replace(), có thể replace 1 lần như dòng 31
// const giaTienThucTeUI = 'Gia niem yet: 1,250.99 USD' //giá expect: 1250.99
// const chuoiDaLamSachPhanGiaNiemYet = giaTienThucTeUI.replace('Gia niem yet: ', "").replace(' USD', "").replace(',',"")//Thay thế gia niem yet thành chuỗi rỗng
// const chuoiDaLamSachPhanUSD = chuoiDaLamSachPhanGiaNiemYet.replace(' USD', "")
// const chuoiDaLamSachDauPhay = chuoiDaLamSachPhanUSD.replace(',',"")

// console.log (chuoiDaLamSachPhanGiaNiemYet)
// console.log (chuoiDaLamSachPhanUSD)
// console.log (chuoiDaLamSachDauPhay)

// # HÀM replaceAll
const dateString = '2025-12-25'
//format date thành dạng 2025/12/25
console.log(dateString.replaceAll('-','/')) //nếu dùng replace thì chỉ thay đến 2025/, phần sau ko thay đổi nên phải dùng replaceAll

// # HÀM Split -- kết quả trả về là array - tách chuỗi thành danh sách 
//test breadcrumb
const breadCrumbText = 'Trang chu > Dien Thoai > Apple'
const breadCrumArray = breadCrumbText.split(' > ')
console.log(breadCrumArray.length);

//# Hàm IndexOf - trả về vị trí của ký tự cần tìm 
const tieuDe = 'Automation Testing that thu vi'
const viTri = tieuDe.indexOf('Testing')
console.log(`Tu Testing bat dau o vi tri: ${viTri}`)
const urlHienTai = 'https://example.com/login?status=success'
const ketQuaTimKiem = urlHienTai.indexOf('error') //nếu ko tìm thấy thì sẽ về là -1
console.log (`Ket qua của indexOf ${ketQuaTimKiem}`)

if(ketQuaTimKiem ===-1){
    console.log('URL KHO CHUA THAM SO LOI, DANG NHAP THANH CONG')
}else{
    console.log('DANG NHAP THAT BAI')
}

//# HÀM slice: nhận 2 đối số: vị trí bắt đầu & vị trí kết thúc 
const urlTrangThanhCong ='https://example.com/order-success?id=ORD-987654-2025&status=paid'
//const viTriBatDau = urlTrangThanhCong.indexOf('id=') + 3 //để lấy ra giá trị bắt đầu của ID
const viTriBatDau = urlTrangThanhCong.indexOf('ORD') //nhưng dùng cách này thì có thể xảy ra trường hợp BE thay đổi mã đơn hàng
const viTriKetThuc = urlTrangThanhCong.indexOf('&') //vị trí kết thúc của ID
const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc)
console.log (`Ma don hang nhan duoc la ${maDonHang}`);

// const phanSauDauBang = urlTrangThanhCong.split('=')[1]
// console.log(phanSauDauBang);
// const maDonHang1 = phanSauDauBang.split('&')[0]
// console.log (maDonHang1);

//# Method làm tròn xuống: Math floor
console.log(Math.floor(4.99));
console.log(Math.floor(4.01));

//# Method làm tròn lên: Math ceil
console.log(Math.ceil(4.99))
console.log(Math.ceil(4.01))

//# Method làm tròn: Math round
console.log(Math.round(4.7)) // làm tròn lên 5
console.log (Math.round(4.49)) //làm tròn xuống 4

//# Tạo số random trả về số thập phân ngẫu nhiên 0<= số ngẫu nhiên <=1
console.log(Math.random());

//Công thứ 1: tạo số nguyên từ 0 > max
//Math.floor(Math.random() * (max+1)) -> Math.random sẽ trả về 0 <= so ngau nhien < 1
//giá trị nhỏ nhất: 0*101 = 0, giá trị lớn nhất: 0.99999*101 = 100.9999
//const soNgauNhien = Math.floor(Math.random() * 101) //tạo ra số ngẫu nhiên từ 0 đến 100

//Công thứ 2: tạo số nguyên từ min đến max: ví dụ tạo số nguyên từ 50 đến 100 
//Math.floor(Math.random() * (max-min + 1)+ min)
// const min = 50
// const max = 100
// const soNgauNhien = Math.floor(Math.random()* (max-min+1)+min)
// console.log(soNgauNhien);

//muốn tìm random trong 1 khoảng từ 50 đến 55: kết quả có thể bao gồm 50, 51, 52,...

//ví dụ thực hành:
const tamTinhTextUI = 'Tam tinh: 1,250,500.75 VND'
//console.log(tamTinhTextUI.replaceAll(',',''))
let tamTinh = tamTinhTextUI.replaceAll(',','').replace(' VND','').replace('Tam tinh:', '')
console.log(tamTinh)
//const tongCongTextUI = 'Tong cong (da giam): 1,125,450.75 VND'

//#Các phép toán cơ bản 
// phép chia lấy dư
//ví dụ: userID chẵn thì sẽ vào giao diện B, userID lẻ thì sẽ vào giao diện A
const userIdChan = 84322
const userIdLe = 84321
const soDu = userIdChan % 2
if(soDu === 0){
    console.log ('GIAO DIEN B');
}else{
    console.log ('GIAO DIEN A');
}

//# Phép cộng - có tính chất nối chuỗi, kết quả cuối cùng là dạng String
const soLuongKeo = 5
const soLuongBanh = 5
console.log (`Tong so: ${soLuongBanh + soLuongKeo}, type of: ${typeof(soLuongBanh+soLuongKeo)}`)
//=> phải đồng dạng về dạng number
const donGiaText ="25000"
const phiShip = "10000" 

//# Ép kiểu - parseInt() - đọc từ trái qua phải và dừng lại khi thấy số nguyên 
const soLuongText ='15 san pham'
console.log(parseInt(soLuongText))

console.log (`dau cach ${parseInt(" 100 20 san pham")}`)// sẽ bỏ qua dấu cách đầu để đọc tiếp, nhưng nếu dấu cách ở giữa thì sẽ không xác định được, không lấy được 20 

//# Ép kiểu - parseFloat() - lấy cho số thập phân 
const giaTienText ='$29.99 USD'
const giaTien = giaTienText.replace('$','')
console.log(parseFloat(giaTien));
console.log(Number(giaTienText)); //sẽ check luôn là có phải dạng number không 

//Number - kiểm tra lại xem parseIn và parseFloat đúng chưa
const tongTienText ='Tong thanh toan: 2,540,000.50 VND'
const chuoiDaLamSach = tongTienText.replace('Tong thanh toan: ','').replace(' VND', '').replaceAll(',','')
console.log(chuoiDaLamSach)
const chuoiNumber = Number (chuoiDaLamSach)
console.log(`Ta co chuoi: ${chuoiNumber},${typeof(chuoiNumber)}`);

//KẾT LUẬN:
//b1: dữ liệu thô từ UI luôn luôn là string 
//b2: thay đổi dữ liệu bằng các phương thức chuỗi: replace, split,..
//b3: ép kiểu: chuyển tất cả dữ liệu bằng các parseINT,...
//B4: thực hiện tính toán từ b3 

//# NaN: Not a number -> xảy ra khi kết quả ép kiểu thất bại
let ketQua1 = parseInt('hello')
console.log(ketQua1);
//#NaN: xảy ra khi thực hiện phép toán bất khả thi, vô nghĩa 
let ketQua2 = 100*'ao'
console.log(ketQua2);

//#check xem có phải NaN không: Number.isNaN(), trả về true nếu param truyền vào là NaN 
let ketQuaTinhToan = parseInt("abc")
console.log(Number.isNaN(ketQuaTinhToan));

//Bài toán thực tế: 
const tonKhoText1 ='Ton kho: 25'
const tonKhoText2 = 'Ton kho: het hang'
function kiemTraVaHanhDong(inputText){
    console.log (`Dang xu ly chuoi ${inputText}`);

    const chuoiSo = inputText.replace('Ton kho: ','')
    const soLuong = parseInt(chuoiSo)

    if (Number.isNaN(soLuong)){
        console.log ('San pham het hang, bo qua hanh dong them vao gio hang');
    }else{
        console.log(`so luong hang con la ${soLuong}`);
        if (soLuong > 0){
            console.log('Thuc hien hanh dong them vao gio hang');
        }
    }
}
console.log('Kich ban 1: con hang');
kiemTraVaHanhDong(tonKhoText1)
console.log('Kich ban 2: het hang');
kiemTraVaHanhDong(tonKhoText2)

//#Toán tử gán (Assignment Operators): +=1, *=1
let soTestCaseFail = 0
//lan dau tien test 1 login that bai
soTestCaseFail = soTestCaseFail + 1 
soTestCaseFail +=1 // tương đương với dòng 195
console.log(soTestCaseFail);

//#Toán tử tăng/giảm: ++x và x++ (Increment/Decrement Operators)
//hậu tố: x++: trả về giá trị cũ, rồi mới tăng
// let toVeXemPhim = 10
// let veHienTai = toVeXemPhim++
// console.log(`ve hien tai bay gio dang la so: ${veHienTai}`);
// console.log(`thu tu bay gio la: ${thuTuVeXemPhim}`);

//tiền tố: ++x: tăng giá trị biến x lên 1 ngay lập tức rồi trả về giá trị ban đầu
// let soLanClick = 0
// console.log('Da click lan dau tien');
// soLanClick++
// console.log(`Tong so lan da click ${soLanClick}`);

//ví dụ bao nhiêu lần click sẽ hiện popup, nếu không thì sẽ là bug
let attempts = 0
const MAX_ATTEMPTS = 3;
function performClickWithRetry(){
    attempts++//thằng biến đếm sẽ luôn cập nhật, lần đầu tiền sẽ tăng attempts lên 1
    //dùng tiền tố hay hậu tố cũng được, nhưng phải note tường minh
    console.log(`Bat dau thuc hien click , lan thu: ${attempts}`);
    const isSuccess = false;
    if(!isSuccess){
        if (attempts >= MAX_ATTEMPTS)
            console.error( `Da thu ${attempts} va van that bai. Dung lai`)
    }else{
        console.log(`-> click that bai, so lan da thu ${attempts}`);
    }
}
performClickWithRetry()
performClickWithRetry()
performClickWithRetry()
performClickWithRetry()

// #Toán tử so sánh
console.log(`So sanh ${3> 4}`);

//So sánh ==  và === (nghiêm ngặt hơn, check từ kiểu dữ liệu rồi mới check đến giá trị mình so sánh): trả về true hoặc false
const giaTriTuUI = '10'
const giaTriTuDb = 10
const soSanhGiaTriLongLeo = giaTriTuUI == giaTriTuDb
console.log(soSanhGiaTriLongLeo);

const soSanhGiaTriStrict = giaTriTuUI === giaTriTuDb
console.log(soSanhGiaTriLongLeo);

//So sánh khác, không bằng: !=, !==(nghiêm ngặt)
const responseAPI ={
    product: "Laptop",
    quantity: false 
}
const soLuongMongDoi = 0;
if(responseAPI.quantity === soLuongMongDoi){
    console.log(`PASSED`)
}else{
    console.log(`FAILED`)
}
// Nhược điểm của ==: convert giá trị false và rỗng ('') thành 0 

//# Toán tử Logic (Logical Operators)
//# && (AND)
const nutDangNhapIsVisible = true
const nutDangNhapIsEnabled = true
const coTheClickDangNhap = nutDangNhapIsEnabled && nutDangNhapIsVisible //-> cả 2 bằng true thì mới pass
if (coTheClickDangNhap){
    console.log ('PASS DIEU KIEN');
}else{
    console.log ('FAIL DIEU KIEN');
}

//# || (OR)
const thongBaoThucTe = 'Cam on ban da mua hang'
//const expectedThongBao = 'Cam on ban da mua hang'
const laThongBaoHopLe = (thongBaoThucTe === 'Cam on ban da mua hang') || (thongBaoThucTe === 'Dat hang thanh cong')
if (laThongBaoHopLe){
    console.log ('TEST PASSED')
}else{
    console.log ('TEST FAILED')
}

//# ! (NOT)
let spinnerIsVisible = false
if (!spinnerIsVisible){
    console.log ('SPINNER DA BIEN MAT. CO THE THUC HIEN BUOC TIEP THEO');
    // page.fill ('')
}else{
    console.log ('VAN CON SPINNER');
}

//BẢNG THỨ TỰ ƯU TIÊN CÁC TOÁN TỬ
const tongTienDonHang = 60000
const laThanhVienVip = true
const coMaGiamGiaDacBiet = false
let duocGiamGia = laThanhVienVip && tongTienDonHang > 50000|| coMaGiamGiaDacBiet
//thứ tự thực hiện: 
//b1: phép so sánh: tongTienDonHang > 50000 => boolean: true
//b2: phép toán &&: xét laThanhVienVip 