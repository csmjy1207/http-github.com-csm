// 基础类型
let isDone: boolean = false;    // 布尔

let decLiteral: number = 6;     // 数字
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let nam: string = "bob";        // 字符串
nam = "smith";

let sex: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ sex }.
I'll be ${age + 1} years old next month.`;

let list: number[] = [1, 2, 3];     // 数组
let list01:Array<number> = [1, 2, 3];

let x: [string, number];        // 元组
x = ['hello', 10];
// x = [10, 'hello']  Error

enum Color {Red, Green, Blue}      // 枚举
let c: Color = Color.Green;

let notSure: any = 4;       // any 可以为任意类型

function WarnUser(): void { // void 声明void类型 只能赋予undefined和null
    console.log("This is my warning message");
    
}
let umusable: void = undefined;
let u: undefined = undefined;
let n: null = null;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {        //never
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while(true) {

    }
}

declare function creat(o:object | null): void;  // Object
creat({ prop: 0 });
creat(null)


// 变量声明
// var let const
for(var i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);},100 * i);   // 10个10
}

for(let i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);},100 * i);   // 0 - 9
}
// let vs const
// 一情况而定，所有变量除了你计划去修改的都应该使用const。

// 解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first);     // 1
console.log(second);    // outpus 2

first = input[0];
second = input[1];

//解构
[first, second] = [second, first];

// 作用于函数参数
function f ([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
// f(input);

// 使用...语法创建剩余变量
let [first02, ...rest] = [1, 2, 3, 4];
console.log(first02);   // 1
console.log(rest);      // 234

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

// 数组解构
// ({ a, b }) = ({ a: "baz", b: 101 });

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// 函数声明
type C = { a: string, b?: number }
function f2({ a, b }: C): void {
    // ...
}

// 扩展
let first0 = [1, 2];
let second0 = [3, 4];
let bothPlus = [0, ...first0, ...second0, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy"};
let search = { ...defaults, food: "rich" };

//