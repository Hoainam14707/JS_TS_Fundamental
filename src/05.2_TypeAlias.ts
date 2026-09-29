export{};
// Nếu object của bạn có rất nhiều property:
let testCase: {
    id: string;
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    result: "PASS" | "FAIL" | "SKIPPED";
    timeout: number;
} = {
    id: "TC001",
    title: "Login successfully",
    priority: "HIGH",
    result: "PASS",
    timeout: 5000
};

// => Nếu có 20 test case thì bạn không muốn viết cái type dài ngoằng này 20 lần.
// Sử dụng Type Alias:
type TestCase = {
    id: string;
    title: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    result: "PASS" | "FAIL" | "SKIPPED";
    timeout: number;
};

let testCase2: TestCase = {
    id: "TC001",
    title: "Login successfully",
    priority: "HIGH",
    result: "PASS",
    timeout: 5000
};

let testCase3: TestCase = {
    id: "TC002",
    title: "Login with invalid password",
    priority: "MEDIUM",
    result: "FAIL",
    timeout: 3000
};

let testCase4: TestCase = {
    id: "TC003",
    title: "Logout",
    priority: "LOW",
    result: "SKIPPED",
    timeout: 2000
};