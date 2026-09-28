// 1. Vấn đề: một biến có thể có nhiều type

let id = 123;  // => TypeScript suy luận: id → number

// => nếu muốn add 1 kiểu dữ liệu khác thì không đc
id = 456;      // ✅
// id = "TC001";  // ❌

// Union Type dùng dấu | => định nghĩa cho có thể dùng nhiều hơn 1 data type
let id2: number | string;   // => id có thể là number hoặc string.
id2 = 123;       // ✅
id2 = "TC001";   // ✅
// id2 = true;      // ❌ => vì boolean không nằm trong union.

let id3: number | string | boolean;
id3 = 123;       // ✅
id3 = "TC001";  // ✅
id3 = true; // ✅

// Union Type với function
function printId(id: number | string) {
    console.log(id);
}

printId(123);       // ✅
printId("TC001");   // ✅
// printId(true);      // ❌

// Nhưng sẽ có vấn đề với function: Vì hàm nhận 2 kiểu dữ liệu của cùng một biến
// => Những hàm đặc biệt của biến mà biến kia không có thì sẽ bị báo lỗi 
// Ví dụ:
function printId2(id: number | string) {
    console.log(id);
}
// id.toUpperCase(); => sẽ báo lỗi vì UpperCase chỉ có của string mà k có của number
// => chúng ta phải xử lý cho mỗi kiểu dữ liệu:
function printId3(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
}