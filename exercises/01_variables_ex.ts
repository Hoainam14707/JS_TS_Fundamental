export{};

// Bài 1.1 — let / const
// Tạo các biến:
// * userName = "Nam"
// * age = 33
// * isLeader = true
// * country = "Vietnam"
// Sau đó:
// 1. In tất cả ra console.
// 2. Đổi userName thành "Bao Khánh".
// 3. Tăng age lên 1.
// 4. Thử thay đổi country nếu khai báo bằng const.
// 5. Khai báo job bằng let nhưng không gán giá trị ngay, sau đó gán "QA Test Leader".

let userName = "Nam";
let age = 33;
let isLeader = true;
const country = "Vietnam"

console.log(userName);
console.log(age);
console.log(isLeader);
console.log(country);

userName = "Bao Khanh"
age = age + 1;
// country = "American"
let job;
job = "QA Test Leader"

// Bài 1.2 — Suy luận kiểu dữ liệu
// Không được viết type annotation.
let name = "Nam";
let age2 = 33;
let isWorking = true;
let score = 95.5;

console.log(typeof name);
console.log(typeof age2);
console.log(typeof(isWorking));
console.log(typeof score);

// Bài 1.3 — const và object
const user = {
    name: "Nam",
    age: 33
};

user.name = "Bao Khanh";
console.log(user.name);
console.log(user);

// user = {
//     name: "Test",
//     age: 20
// }; => issue return: Cannot assign to 'user' because it is a constant.