export{};

// 1. Type Inference
let age = 33; // TypeScript tự suy luận "age → number"

let name = "Nam";   // TypeScript tự suy luận "name → String"
let isLeader = true;    // TypeScript tự suy luận "isLeader → boolean"

// => Type Inference = TypeScript tự suy luận kiểu dữ liệu.

// 2. Type Annotation: Bạn có thể chủ động nói cho TypeScript biết type:
let age2: number = 33;
let name2: string = "Nam";
let isLeader2: boolean = true;

//=> Viết kiểu nào cũng hợp lệ

// !.  
// 1. Type Annotation cực kỳ hữu ích khi chưa có giá trị
let username: string;
username = "Nam";      // ✅
username = "Khanh";    // ✅
// username = 123;        // ❌

// Nếu không có annotation, TypeScript có thể xử lý biến chưa khởi tạo khác với điều bạn mong muốn tùy ngữ cảnh/config.
// Vì vậy khi biến chưa có giá trị nhưng bạn biết trước type, annotation rất hữu ích.

// 2. Function là nơi Type Annotation trở nên cực kỳ quan trọng
function add(a: number, b: number) {
    return a + b;
}

// TypeScript sẽ bắt lỗi trước khi bạn chạy.
add(10, 20);       // ✅
add(10, 20.5);     // ✅
// add("10", "20");   // ❌

// 3. Return type
// Bạn cũng có thể chỉ định kiểu dữ liệu function trả về:
function add2(a: number, b: number): number {
    return a + b;
}

// 4. Type Annotation với Array
let names: string[] = ["Nam", "An", "Minh"];
names.push("Khanh"); // ✅
// names.push(123);     // ❌