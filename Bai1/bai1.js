alert('Xin chao cac ban')

console.log ('minh la javascript')

//# BÀI 1: BIẾN
/* Biến là gì?
- Luôn có 2 thứ: 
+ Nhãn (tên biến)
+ Gía trị của biến
=> Javasript sẽ làm những việc sau:
- Khai báo biến (Declaration)
- Gán giá trị (Assignment)
- Truy xuất (Retrieval)
=> Mối quan hệ của biến với bộ nhớ máy tính (RAM): javscript nói với RAM là có biến nào

# Cách khai báo biến
- let: dùng cho biến có thể thay đổi giá trị 
- const: dùng  cho hằng số, giá trị không thể thay đổi sau lần đầu 
ví dụ: 

let diemSo;
diemSo = 8;
console.log(diemSo)

diemSo = 10
console.log(diemSo)
=> không nên thay đổi ở dòng 22, vì ở giữa có thể ảnh hưởng đến logic của những dòng code liên quan
nên gọi tiếp dòng 25

const soPi = 3.14
console.log (soPi)
*/

let teacherName
teacherName = 'Hoang' 
console.log (teacherName)

/* IN biến ra màn hình:
#Cách 1: Nối chuỗi (+)
const tenTestCase = 'TC01 - Login'
const trangThai = 'Passed'
const thoiGianChay = 3500
console.log ('Test case: ' + tenTestCase + '-Status' + trangThai + '-Duration' + thoiGianChay)

#Cách 2: Dùng dấu phẩy (,):
const trangThai2 = 'Failed'
console.log ('Test case:', tenTestCase, '- Status:', trangThai2)

#Cách 3: Template Literals (dấu backtick ``): cho phép update lại value của biến
const tenTestCase3 = 'TC03 - Registration'
const thoiGianChay3 = 3500
console.log (`Test case: ${tenTestCase3} - Durationn: ${thoiGianChay3*2}`)
*/

const tenTestCase = 'TC01 - Login'

const trangThai = 'Passed'

const thoiGianChay = 3500

console.log ('Test case: ' + tenTestCase + '-Status' + trangThai + '-Duration' + thoiGianChay)

const trangThai2 = 'Failed'
console.log ('Test case:', tenTestCase, '- Status:', trangThai2)

const tenTestCase3 = 'TC03 - Registration'
const thoiGianChay3 = 3500
console.log (`Test case: ${tenTestCase3} - Durationn: ${thoiGianChay3*2}`) 

//đi siêu thị mua 2 cái áo, mỗi cái áo 25000VND. Thue VAT là 10% -> hỏi tổng số tiền phải trả 
const soVAT = 0.1
const donGia = 25000
let soLuongAo = 2
let tongTienHang = donGia * soLuongAo
let tongThanhToan = tongTienHang + (tongTienHang*0.1)
console.log ('Tong so tien phai tra', tongThanhToan, 'VND')

/* Quy tắc đặt tên biến
quy tắc camel: viết hoa từ chữ cái thứ 2
khong sử dụng từ khóa của JS: let, const, if, for,...
JS có phẩn biệt chữ Hoa, chữ thường ví dụ đặt biến 1: ten, biến 2: TEN => là các biến khác nhau 
*/

/* BÀI 2 & 3: CÁC LOẠI DỮ LIỆU NGUYÊN THỦY (PRIMITIVE TYPES)
1. String - Dùng cho văn bản 
let loiChao = 'Xin chào buổi sáng'
const tenSach = 'Lap Trinh JS'
console.log(typeof(loiChao))

2. Number - Dùng cho số nguyên và số thập phân
let tuoi = 30
const PI = 3.14
let ketQua = (tuoi - 6)*PI

3.Boolean 
Chỉ có 2 giá trị: true hoặc false. Dùng để đưa ra quyết định 
let denDangBat = true
let nutThanhToanIsVisible = true 

4.Undefined
Đã được khai báo nhưng chưa được gán giá trị => Javascript khai báo
let diaChiNha
console.log(diaChiNha)

5.null
Biểu thị sự "rỗng" một cách có chủ đích
let popupKhuyenMai = null
console.log(typeof(popupKhuyenMai)) => kiểu type là object 

*/

let loiChao = 'Xin chào buổi sáng'
const tenSach = 'Lap Trinh JS'

console.log(typeof(loiChao))
const userName = 'automation@gmail.com'