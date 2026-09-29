export { };

console.log("============== Bài 5.1 — Literal Type =============");
let browser: "chrome" | "firefox" | "webkit";

browser = "chrome";
// browser = "edge"; ==> Type '"edge"' is not assignable to type '"chrome" | "firefox" | "webkit"'.

console.log("============== Bài 5.2 — Test Result =============");
let result: "PASS" | "FAIL" | "SKIPPED" | "BLOCK";

result = "PASS";
result = "FAIL";
// result = "ERROR"; => Type '"ERROR"' is not assignable to type '"PASS" | "FAIL" | "SKIPPED" | "BLOCK"'.

console.log("============== Bài 5.3 — Type Alias =============");
type User = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
};

let user1: User = {
    id: 1,
    name: "Nam",
    age: 33,
    isActive: true,
}

let user2: User = {
    id: 2,
    name: "Khanh",
    age: 5,
    isActive: true,
}

console.log(user1);
console.log(user2);

console.log("============== Bài 5.4 — QA Exercise =============");
type TestCase = {
    id: string,
    title: string,
    priority: "LOW" | "MEDIUM" | "HIGH",
    result: "PASS" | "FAIL" | "SKIPPED" | "BLOCKED",
    timeout: number
};
let TC01: TestCase = {
    id: "1",
    title: "sos 01",
    priority: "LOW",
    result: "PASS",
    timeout: 5
};

let TC02: TestCase = {
    id: "1",
    title: "autoTest",
    priority: "LOW",
    result: "PASS",
    // result: "Error", => Type '"Error"' is not assignable to type '"PASS" | "FAIL" | "SKIPPED" | "BLOCKED"'. 05_LiteralType_TypeAlias_ex.ts(46, 5): The expected type comes from property 'result' which is declared here on type 'TestCase'
    timeout: 5
};

console.log(TC01);
console.log(TC02);