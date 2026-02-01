//# Cấu trúc vòng lặp while: thực thi lệnh lặp đi lặp lại 
/*
bao gồm 3 phần: điểm xuất phát, điều kiện, giá trị cập nhật
let bien dieu kien
while(dieu kien){
 khoi lenh thuc thi -> giá trị cập nhật để làm thay đổi biến điều kiện
}
*/
// let giaGame = 1000000
// let soTienTietKiem = 0
// let soTuan = 0 

const { cacheSignal } = require("react");

// while (soTienTietKiem < giaGame){
//     console.log (`Tuan ${soTuan +1}. Dang co ${soTienTietKiem}`);
//     soTienTietKiem += 150000
//     soTuan++ //tăng số tuần lên 
//     console.log ('Bo vao tiet kiem 150k');
// }
// console.log (`Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua game`)

// let giaGame = 1000000
// let soTienTietKiem = 0
// while (soTienTietKiem < giaGame){
//  console.log ('tiet kiem tien')
// } //-> chạy đến vô hạn, ko dừng lại vì ko có điều kiện 

//#Vòng lặp For - xác định chính xác số vòng lặp mình cần, ứng dụng check cho mảng array, cần xác định index
/*
for (1. điểm xuất phát; 2.điều kiện dừng; 3. bước tiếp theo){
khối lệnh thực thi 
}
*/
// for (let i = 0; i < 5; i++){
//     console.log(`dang thuc hien vong lap thu ${i}`);
// }

// for (let i = 0; i <= 5; i++){
//     if (i===3){
//         console.log('bo qua so 3'); //chạy đến i = 3 thì log ra như vậy
//         continue // vẫn chạy tiếp đến 5
//     }
//     console.log(`So hien tai la ${i}`);
// }

// for (let i = 0; i <= 5; i++){
//     if (i===3){
//         console.log('bo qua so 3'); //chạy đến i = 3 thì log ra như vậy
//         break//dừng luôn vòng lặp khi đạt 3, ko chạy tiếp đến 5
//     }
//     console.log(`So hien tai la ${i}`);
// }

// const products = ['apple', 'orange', 'grape']
// console.log(`so phan tu ${products.length}`);
// console.log(`phan tu dau tien la ${products[0]}`);
// console.log(`phan tu dau tien la ${products[1]}`);
// console.log(`phan tu dau tien la ${products[2]}`);
// for (let i = 0; products.length; i++){
//     if (products[i]=== 'orange'){
//         console.log(`da tim thay qua cam`);
//         break
//     }
//     console.log(`Dang thuc hien vong lap so ${product[i]}`);
// }

//# Vòng lặp For..of - viết ngắn gọn hơn for cổ điển, ko quá quan tâm đến index của giá trị trong mảng => hay dùng với mảng
/*
for (const item of array)
*/
// const possibleBanners = ['#promo-popup','.cookie-banner', '[data-ad="true"']
// const visibleBanner ='.cookie-banner'
// for (const selector of possibleBanners){// khai báo biến đếm rút gọn, chạy qua array, index xác định trong câu lệnh này 
//     console.log(`dang kiem tra selector: ${selector}`);
//     if (selector === visibleBanner){
//         console.log('da tim thay banner');
//         break
//     }
// }



//# MẢNG ARRAY 
// const browser = ['chrome', 'firefox', 'edge']
// const errorLog = []
// //console.log(browser [3]);//kết quả trả ra sẽ là undefined vì index chỉ tới 2
// console.log(browser [2]);

//# CÁC PHƯƠNG THỨC CỦA MẢNG
// 1. push - thêm phần tử vào cuối mảng
// const testCases = ['login','logout'] //nên cũng kiểu dữ liệu 
// testCases.push('add to cart') //đẩy vào cuối mảng 
// console.log(`mang bay gio se la ${testCases} va length cua mang ${testCases.length}`);

// //2. pop -  xóa phần tử ở cuối mảng
// const tasks = ['Task A', 'Task B', 'Task C']
// const newTasks = tasks.pop() //tác động lên mảng chính tasks 
// console.log(`mang moi la ${tasks}`);
// console.log(`gia tri da xoa la ${newTasks}`);

//Hàm return
/*
1. trả về 1 giá trị 
function tinhTong(a,b){
    const result = a+b
    return result // return (a+b)
}
const sum = tinhTong(3,5)
console.log(sum);
2. kết thúc hàm ngay lập tức - giống như break 
function checkAces(age){
   if (age < 18){
   console.log ('Chua du tuoi moi ban ra ngoai');
   return //thoát khỏi function luôn, không thực hiện gì sau biểu thức return nữa
   hoặc return 'Moi ban ra ngoai'
   }
   console.log ('Du tuoi vao. moi ban');
}
   checkAccess(15)

   nếu viết return 'Moi ban ra ngoai' thì phải viết console.log để hứng message 
   const message = checkAccess(15)
   console.log (message)
*/
//for..of
const tickets = ['Thường', 'Thường', 'VIP','Thường','VIP']
for (const ticket of tickets){ //cách đặt convention, lấy từng phần tử trong mảng 
    console.log(`Dang kiem tra ve: ${ticket}`);
    if (ticket ==='VIP'){
        console.log('MOI BAN VAO');
        break;
    }
}
//# forEach - phải khai báo function, ko dùng break được, nhưng vẫn trả ra index => ảnh hưởng đến hiệu năng vì sẽ duyệt hết mảng 
// const possibleBanners = ['#promo-popup','.cookie-banner', '[data-ad="true"']
// possibleBanners.forEach(function(item, index){
//     console.log(`phan tu o chi so ${index} là ${item}`);
// })
// let foundVip = false;//gán cờ
// tickets.forEach(function(item)
// {  //fall back function, item chính là giá trị trong array, có thể đặt tên khác 
//     if(foundVip){
//         console.log(`Da tim thay VIP, nhung van liec qua ve${item}`);
//         return
//     }
//     console.log(`Dang kiem tra ve ${ticket}`);{
//     if (item === 'VIP')
//         console.log('=> DA TIM THAY VE VIP MOI VAO');
//         foundVip = true //nếu tìm ra được rồi thì phải gán lại foundVip = true để thoát khỏi vòng lặp 
// }
// })

/*ví dụ: phân tích log server
Mục tiêu: 
Tim dòng log phù hơp đầu tiên có status = fail, service = user_auth
Từ dòng log đó, dùng các kỹ thuật xử lý chuỗi đề trích xuất ra mã người dùng (uid) và mã lỗi
Ngay sau khi trích xuất thành công, dừng lại và không xử lý các dòng log còn lại
*/
const logEntries = [
    't=1m service=PAYMENT status=OK uid=101',
    't=2m service=USER_AUTH status=FAIL uid=205 err_code=401',
    't=3m service=INVENTORY status=OK uid=302',
    't=4m service=USER_AUTH status=OK uid=205',
    't=4m service=USER_AUTH status=FAIL uid=404 err_code=404',
];

let failedLogInfo = null
for(const log of logEntries){
    if(log.includes('service=USER_AUTH')&& log.includes('status=FAIL')){
        console.log(`->Tim thay dong log tiem nang: ${log}`);
        
        const parts = log.split(' ')
        console.log(`sau khi tach chuoi thanh mang, ${parts}`);
        let uid = null
        let errCode = null
        for (const part of parts){
            if(part.startsWith('uid')){
                uid = part.replace('uid=','')
            }
            if (part.startsWith('err_code=')){
                errCode=part.slice("err_code=".length)
            }
        }
        failedLogInfo={uuId: uid, errCode: errCode}
        console.log('Da tim thay log thich hop');
        break
    }
}
console.log('Thong tin da tim thay la', failedLogInfo);

//PHƯƠNG THỨC BIẾN ĐỔI CỦA MẢNG
//# Phương thức map() - tương đối giống forEach, lặp qua từng phân tử của mảng và trả ra 1 mảng mới 
// const numbers = [1,2,3,4,5,6] //không xử lý mảng gốc 
// const doubleNumber = numbers.map(function(number){
//     return number * 2
// })
// console.log('Mang ban dau', numbers);
// console.log('Mang sau khi bien doi', doubleNumber);

// const dailySales = [50,65,60,80,75]

// const saleTrend = dailySales.map(function(currentItem, index, array){//ko bắt buộc dùng hết cả 3 đối số 
//   if (index === 0){
//     return `Ngay 1: ${currentItem} {Bat dau}`
//   }
//   const previousSale = array[index - 1]
//   const change = currentItem - previousSale
//   return `Ngay ${index + 1}: ${currentItem} Thay doi ${change}`
// })
// const result = saleTrend 
// console.log(saleTrend);

//# Phương thức filter
// const numbers = [1,2,3,4,5,6]
// const soChan = numbers.filter(function(item){
//     return item %2 === 0
// })
// console.log (`Mang ban dau: ${numbers}`);
// console.log(`Mang so chan: ${soChan}`); 

//#Phương thức find() - sau tìm thấy đầu tiên, thì sẽ trả ra giá trị luôn, không tìm nữa 
// const numbers = [1,2,3,4,5,6]
// const soLonHon3 = numbers.find(function(item){
//  return item> 3
// })
// console.log('so lon hon 3 la', soLonHon3);// trả ra 4, tìm đến 4 là dừng 

// //TÌM HIỂU Object: key: value 
// const userArray = ['hoang', 'hoang@gmail.com', 30, 'admin']

// const userArrayObject = {
//     name: 'Hoang',
//     email: 'hoang@gmail.com',
//     age: 30,
//     role: 'admin'
// }

//truy cập thông tin object
//Cách 1: dùng dấu chấm
// console.log(userArrayObject.name);
// userArrayObject.address = 'HN'
// console.log(userArrayObject);
// delete userArrayObject.name
// console.log(userArrayObject);
//Cách 2: 
// console.log(userArrayObject['name']);

//SỬ DỤNG Object trong automation: tổng hợp dữ liệu, tạo và lưu data theo cấu trúc để sử dụng 
// const testData ={
//     userName: 'An',
//     password: '123',
//     role: 'member'
// }

// const testDataAdmin = {
//     userName: 'An1'
//     password: '123'
//     role: 'admin'
// }
//=> cần login bằng user nào trong testcase thì đã có chỗ lấy thông tin 

// const apiResponse = {
//     userId: 123,
//     userName: 'testUser'
//     email: '123@gmail.com'
// }
// console.log(`Cac key o trong object la: ${Object.keys(apiResponse)}`);
// console.log(`Cac value o trong object la: ${Object.values(apiResponse)}`);

//Array chứa object 

//Tìm sản phẩm có category = electronics, instock = true và trả ra finalPrice: giảm giá 10%
const products= [
    {name: 'Laptop', category: 'Electronics', price: 1200, inStock: true},
     {name: 'T-shirt', category: 'Cotton', price: 25, inStock: true},
    {name: 'Mouse', category: 'Electronics', price: 105, inStock: false},
]

const samPhamCanTim = products.filters(function(product){
    return product.category === 'Electronics' && product.inStock
}).map(function(product){
    return {
        name: product.name,
        finalPrice: product.price*0.9
    } //return trả ra 1 object 
}).find(function(product){
    return product.finalPrice < 1200 //tìm trong các object vừa trả 
})
console.log(samPhamCanTim);