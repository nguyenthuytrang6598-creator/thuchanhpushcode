//# Toán tử if else
// if (dieukien){
//     hanh dong a
// }else{
//     hanh dong b
// }

const tenNguoiDungIsVisble = true
if(tenNguoiDungIsVisble){
    console.log ('DANG NHAP THANH CONG')
}else{
    console.log ('DANG NHAP THAT BAI')
}

//# Toán tử else if
// if (dieu_kien_1){
//    hd A
// }else if (dieu_kien_2)

// }else {
//     hd mac dinh
// }
const trangThaiDonHang ='Dang giao hang'
console.log ('KIEM TRA TRANG THAI DON HANG', trangThaiDonHang);

if (trangThaiDonHang === 'Dang xu ly'){
    console.log ('KIEM TRA NUT HUY DON HANG');
}else if (trangThaiDonHang === 'Dang giao hang'){
    console.log ('KIEM TRA NUT THEO DOI DON HANG PHAI DUOC HIEN THI');
}else if (trangThaiDonHang === 'DA GIAO HANG'){
    console.log ('NUT DANH GIA SAN PHAM CAN HIEN THI');

}else{
    console.log (`TRANG THAI DON HANG LA ${trangThaiDonHang} . ko can kiem tra`);
}

//# Cú pháp viết tắt: toán tử ba ngôi
//dieu_kien ? gia trị nếu đúng : giá trị nếu sai 
const isLoggedIn = true 
let message;
if (isLoggedIn){
    message = 'User is currently logged in'
}else{
    message = 'User is logged out'
}
console.log(message);

//-->Cách viết ngắn hơn 
const message2 = isLoggedIn ? 'User is currently logged in': 'User is logged out'
console.log(message2)

//ví dụ toán tử ba ngôi cho else if 
const orderStatus = 'Pending'
let iconColor;
if (orderStatus === ' Success'){
   iconColor = 'Green'
}else if(orderStatus === 'Pending'){
    iconColor = 'orange'
}else {
    iconColor ='red'
}
console.log (`mau icon la: ${iconColor}`);

//-> viết tắt
const iconColor2 = orderStatus === 'Success' ? 'Green': //if
                    orderStatus ==='Pending' ? 'Orange': //else if
                    'red'
console.log(iconColor2);

const userRole = 'mode'
let canDeletePost2;
if(userRole === 'admin' || userRole === 'mode'){
    canDeletePost2 = true
}else{
    canDeletePost2 = false
}
console.log(canDeletePost2);

//# switch case: sử dụng khi so sánh 1 biến với giá trị nào đó, có khả thi
// //switch (bien can kiem tra){
//    case giaTri1: //code thực thi 
//    break;
//    case giaTri2://code thực thi
//    break;
//    default: //code thực thi khi không có case nào khớp
// }
const enviroment = 'dev'
let baseUrl;
let userName;
let passWord
switch (enviroment){
    case 'dev':
        baseUrl = 'dev.example.com'
        userName = 'dev-user'
        passWord = 'dev-pass'
        break;
      case 'staging':
        baseUrl = 'stg.example.com'
        userName = 'stg-user'
        passWord = 'stg-pass'
        break;
    default:
        console.log ('Loi moi truong ko tim thay');
}
console.log (`cau hinh duoc thiet lap voi URL: ${baseUrl}, ${userName}, ${passWord}`);

const browser ='chrome'

//# truthy và falsy: là bản chất thực sự của việc trả về giá trị dựa trên toán tử so sánh: if (), ||, &&

let userName1 = null;
const userToDisplay = userName1 || 'Guest' //vì userName1 = null, nếu console sẽ trả ra Guest
console.log (userToDisplay);

let userNameInput = '' //user nhập kí tự rỗng
const userNameInputDisplay = userNameInput || 'Default' //vẫn trả về Default, JS không trả ra giá trị rỗng được
console.log (userNameInput)

if (userNameInput !== '' && userNameInput !== null && userNameInput !== undefined){
    console.log ('USER da ko nhap du gia tri');
}
//cách viết ngắn gọn
if (userNameInput){//sẽ tự động check xem có nằm trong 6 giá trị falsy ko, mà mình ko cần phải viết đủ 6 đk check 
    console.log ('USER da ko nhap du gia tri');
}else {
    console.log ('User da nhap chuoi rong');
}

//KẾT LUẬN: 6 giá trị mà JS coi là falsy và thực hiện logic khác: check từ giá trị bên trái, nếu là falsy thì trả giá trị bên phải
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined
// 6.NaN

const errorMessage = [];//mảng rỗng nên ko thuộc 6 falsy
const report = errorMessage ? 'Co loi can xem lai' : 'Tat ca deu pass'
//trả ra 'Co loi can xem lai' -> check độ dài của mảng errorMessage (xem có bn phần tử)
console.log (report);

//truthy -> chuỗi string
//{}
//"0"
//"false"
//[]: bao gồm 1 hoặc nhiều phần tử chứa trong mảng