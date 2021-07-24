window.onload = function () {
    var flag:boolean = false;
    var num:number = 15;
    var str:string = 'abc';

    var a = 10;
    var a : number = 20;

    // 定义函数，计算二个参数的和
    function sum (x:number, y:number) {
        return x + y;
    }
   console.log(sum(2, 3));
   // 接口（Interfaces) 可以用于对[对象的形状] 进行描述
   interface IPerson {
       name?:string;    // ? 表可选属性
       age:number;
       sex:string;
       [propName:string]:any;  //任意属性
   }
   
   let tom:IPerson = {  // 对象收到接口的约束
    //    name: 'tom',
       age: 18,
       sex: 'num',
       obj: {id: 1}
   }
    // 函数类型定义     输入类型    输出类型
    function f(x:number,y:number=1):number[]{   // y:number=1 定义默认值
        return [x,y]
    };
    f(1,3);

    // 泛型
    function f4<T>(x:T,y:T):T[]{
        return [x,y]
    };
    f4<number>(2,3);
    f4<string|number>('a',3);

    function f5(x:string|number[]):number{
        return x.length;
    };
    f5('abc');

    function f6<T>(x:T,y:T):any {
        // return x+y
    };
    f6<number>(2,3);

    function greeter(person) {
        return "Hello, " + person;
    };

    let user = "Jane User";
    document.body.innerHTML = greeter(user)
}