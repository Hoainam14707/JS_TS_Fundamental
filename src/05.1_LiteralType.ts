export{};
// P1: Literal Type:
let brand: string; // => brand có thể nhận bất cứ giá trị nào

brand = "Toyota";
brand = "Honda";
brand = "BMW";

let brand2: "Toyota"; //=> brand 2 chỉ có giá trị là Toyota

brand2 = "Toyota"; // ✅
// brand2 = "Honda";  // ❌ Type '"Honda"' is not assignable to type '"Toyota"'

let status1: "PASS";

status1 = "PASS"; // ✅
// status1 = "FAIL"; // ❌ Type '"FAIL"' is not assignable to type '"PASS"'.

// Literal Type + Union
let status: "PASS" | "FAIL" | "SKIPPED";

status = "PASS";    // ✅
status = "FAIL";    // ✅
status = "SKIPPED"; // ✅

// status = "ERROR";   // ❌ => Type '"ERROR"' is not assignable to type '"PASS" | "FAIL" | "SKIPPED"'.
// status = "DONE";    // ❌ => Type '"DONE"' is not assignable to type '"PASS" | "FAIL" | "SKIPPED"'.

// 👉 Literal Type giúp TypeScript giới hạn giá trị được phép.

//Literal Type với function:
function runTest(browser: "chrome" | "firefox" | "webkit") {
    console.log(`Running test on ${browser}`);
}

runTest("chrome");  // ✅
runTest("firefox"); // ✅
runTest("webkit");  // ✅
// runTest("edge"); // ❌ Argument of type '"edge"' is not assignable to parameter of type '"chrome" | "firefox" | "webkit"'.