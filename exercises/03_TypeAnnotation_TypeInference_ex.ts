export{};

console.log("================Bài 3.1 — Variable annotation=================")

// Khai báo các biến với type annotation bắt buộc:
// userName → string
let userName:string = "Hoai Nam";
// age → number
let age:number = 33;
// isLeader → boolean
let isLeader:boolean = true;
// salary → number
let salary:number = 3000;

//Sau đó cố tình thử gán sai kiểu:
// age = "33"; => Type 'string' is not assignable to type 'number'.

console.log("================Bài 3.2 — Khai báo trước, gán sau=================")
let username: string;
let age2: number;
let isAdmin: boolean;

username = "Nam";
age2 = 33;
isAdmin = false;

console.log("================Bài 3.3 — Array annotation=================")
let names: string[]=[];
let scores: number[]=[];
let testResults: boolean[]=[];

names.push('Nam');
scores.push(100);
testResults.push(true);

//Sau đó cố tình thử gán sai kiểu:
// names.push(123); => Argument of type 'number' is not assignable to parameter of type 'string'.

console.log("================Bài 3.4 — Function=================")
function calculateTotal(price:number, quantity:number):number{
    return price*quantity
}

calculateTotal(100,30);

console.log("================Bài 3.5 — Object annotation=================")

let testCases:{
    id : string;
    title:string
    priority:number
    passed:boolean
} = {
    id: "TC001",
    title: "Login successfully",
    priority: 1,
    passed: true
}

// testCases.priority = "High"; => Type 'string' is not assignable to type 'number'.