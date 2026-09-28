export {};
/*
JS có 2 nhóm kiểu dữ liệu chính
    1. Kiểu Primitive : String/boolean/number/undefined/null/bigint/symbol
    2. Kiểu Non-Primitive: Object/ Array/...
*/

//String:
let name1 = "Nam"; // => không cần khai báo kiểu dữ liệu nó sẽ tự nhận kiểu dữ liệu
name1 = "Bao Khanh";
// name1 = 123; => Khi chúng ta đã khai báo một biến ở một kiểu dữ liệu, sau đó chúng ta gán lại với một kiểu dữ liệu khác thì sẽ báo lỗi syntax

//Number: không cần define kiểu dữ liệu quá chi tiết loại gì: int/ double/.. mà nó sẽ tự định nghĩa kiểu dữ liệu

let age = 33;
let salary = 1500.5;
let score = 9.5;

// Boolean:
let isLeader = true;
let isMarried = false;

// Undefined
let sex; //=> biến được khai báo nhưng chưa có giá trị

//Null : khai báo biến nhưng chủ ý là biến không có giá trị
let selectedUser = null;

//Object
/* Kiểu dữ liệu đối tượng:
    Cú pháp
    Để sử dụng Object, ta dùng cú pháp khai báo với let hoặc const:
        let/const <object_name> = {
            ‘key1’: value1,
            ‘key2’: value2,
            …
            ‘keyN’: valueN
        }
*/
const user = {
    name: "Nam",
    age: 33,
    isLeader: true
};
console.log(user.name);
console.log(user.age);
console.log(user["name"]);

// Object lồng nhau:

const student = {
    id: 1,
    name: "Alex",
    address: {
        province: "Ha Noi",
        isCapital: true,
        country: "Viet Nam"
    }
}

console.log(student.address.province)
console.log(student["address"]["country"])

/* Thêm thuộc tính: => đây là điểm khác nhau giữa JS và TS
    JS: Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định
        nghĩa thuộc tính mới. => Object có thể mở rộng trong runtime

        let bike = {
        "brand": 'Toyota',
        "name": "Raize"
        }

        // Cách 1: 
        bike.color = "White";
        console.log(bike);

        // Cách 2
        bike['price'] = 100;
        console.log(bike);

    TS: sẽ không cho thêm trừ khi phải được định nghĩa trước:

        let bike: {
            brand: string;
            name: string;
            color?: string;
            price?: number;
        } = {
        brand: "Toyota",
        name: "Raize"
        };

*/

// phân biệt ":" và. "="
//: và = có vai trò hoàn toàn khác nhau

// : → nói cho TypeScript biết TYPE
let car2: {
    brand: string;
    model: string;
    year: number;
};

// Đọc là:
// car có kiểu dữ liệu là một object có brand, model, year.
// Nhưng chưa có object thực tế.

//= → gán VALUE
let car3 = {
    brand: "Toyota",
    model: "Raize",
    year: 2021
};

// Đọc là:
// Tạo một object và gán nó vào car.
// TypeScript sẽ tự suy luận type.

//Có thể kết hợp cả hai
let car4: {
    brand: string;
    model: string;
    year: number;
} = {
    brand: "Toyota",
    model: "Raize",
    year: 2021
};


//Array
/*
Mảng (hay array) là một đối tượng trong Javascript, giúp lưu trữ một tập hợp các giá trị, lưu trữ
dưới một tên biến và có thể sử dụng các thao tác trên mảng.
Một mảng có thể chứa nhiều loại dữ liệu khác nhau.
Khai báo mảng
Để khai báo mảng, ta sử dụng cú pháp:
let/const/var <tên_mảng> = [<danh sách các giá trị, cách nhau
bởi dấu phẩy ","]
*/

const arr1 = [1, 2, 3];
const arr2 = ['Nam', 'Hoa', 'Tung'];

console.log(arr1);
console.log(arr2);

// Độ dài của mảng:
console.log(arr1.length);

// Truy xuất các phần tử của Mảng
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])

// Thêm phần tử vào mảng
// Thêm vào đầu mảng => unshift()
arr1.unshift(4)
console.log(arr1)

// Thêm phần tử vào cuối mảng: => push()
arr2.push('Long');
console.log(arr2);

//Xóa phần tử khỏi mảng
// Xóa ở đầu mảng => shift()
arr1.shift();
console.log(arr1)

// Xóa phần tử cuối mảng => pop();
arr2.pop();
console.log(arr2);

/* Tips
-
Mặc dù mảng có thể chứa nhiều kiểu dữ liệu khác nhau, nhưng trong thực tế, chúng ta
thường chỉ sử dụng một loại dữ liệu duy nhất cho một mảng
Không nên: khai báo mix các kiểu dữ liệu trong cùng một mảng
*/
var mixedArr = ["Playwright", 10, true, null, {
    id: 1, name:
        "Alex"
}];
/*
Nên: tách kiểu dữ liệu tương ứng thành từng mảng.
*/
let numberArr = [1, 20.5, -300, 4];
const strArr = ["Playwright", "Việt", "Nam"];