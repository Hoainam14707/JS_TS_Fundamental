export{};

// Bài 2.1 — Primitive types
// string
let name : string = "Nam";
console.log(typeof name);

// number
let num = 135792468;
console.log(typeof num);

// boolean
const isHandsome : boolean = true;
console.log(typeof isHandsome);

// undefined
let val;
console.log(typeof val);

// null
let index:null = null;
console.log(typeof index);

// bigint
// symbol

//Bài 2.2 — Object
// Tạo object mô tả một chiếc xe:
let car: {
    brand: string;
    model: string;
    year: number;
    price: number;
    isAutomatic: boolean;
} = {
    brand: "Toyota",
    model: "SUV",
    year: 2021,
    price: 50000,
    isAutomatic: true
};

console.log(car);
console.log(car.brand);
console.log(car.price);

console.log("=========Bài 2.3 — Array========")
let testCases = ["Login successfully","Login with invalid password","Logout","Forgot password","Change password"];

// Thực hiện:
// 1. In toàn bộ array.
console.log(testCases);
// 2. In phần tử đầu tiên.
console.log(testCases[0]);
// 3. In phần tử cuối cùng.
console.log(testCases[testCases.length-1]);
// 4. Thêm một test case.
testCases.unshift("add more at begin");
console.log(testCases[0]);
// 5. Xóa một test case.
testCases.shift();
console.log(testCases[0]);
// 6. In length.
console.log(testCases.length);
