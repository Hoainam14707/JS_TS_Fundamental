/* 
    - Biến là để lưu trữ một dữ liệu và đối tượng
    - Có 2 loại biến: let/const (vẫn có thể có var nhưng đây là kiểu cũ, không dùng nhiều)
*/

let naming = "Nam";
let age = 33;
let isLeader = true;

// => Js sẽ tự xác định kiểu giá trị
// 1. let có thể thay đổi giá trị
naming = "Bao Khanh"
console.log(naming);

// cũng có thể khai báo trước rồi gán sau
let sex;
sex = "Male";
console.log(sex);

// const là hằng số => không thể thay đổi giá trị
const pi = 3.14;
// pi = 2; // lỗi syntax

//const nhất định phải gán giá trị luôn