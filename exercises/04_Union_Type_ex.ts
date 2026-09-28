export{};
console.log("================ Bài 4.1 — User ID =================")
let userId: number | string;
userId = 123;
userId = "USER_001";
// userId = true; => Type 'boolean' is not assignable to type 'string | number'.

console.log("================ Bài 4.2 — Type narrowing =================")

function printValue(value: string | number) {
//     * Nếu value là string → in uppercase.
// * Nếu value là number → nhân 2 rồi in ra.

    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value*2);
    }
}

printValue("hello") // → HELLO

printValue(10)  // → 20

console.log("================ Bài 4.3 — string | null =================")
let testResult: string | null;

function processResult(result: string | null){
    if(result === "PASS") {
        console.log("Test Result = Pass")
    } else if (result === null){
        console.log("Test result is not available")
    }
}

console.log("================ Bài 4.4 — QA thực tế =================")
let timeout: number | string;

function printTimeout(timeout: number | string){
    if(typeof timeout === "number"){
        console.log("Timeout: 5000 ms");
    } else {
        console.log("Timeout: 5s");
    }
}