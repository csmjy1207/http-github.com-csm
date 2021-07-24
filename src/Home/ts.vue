<template>
    <div>
        <pre>
        什么是TS
            TypeScript是一种由微软开发的自由开源的编程语言，他是JavaScript的
            一个超集，扩展了JavaScript的语法，主要提供了类型系统和对ES6的支持。
            类型的定义

        安装TypeScript
            安装命令
                npm install -g typescript
            查看版本
                tsc -v
            编译一个TypeScript文件(编译之后会生成一个Js文件)
                tsc hello.ts
        
        TypeScript用法
            使用：指定变量的类型，:的前后有无空格都可以
                let num:number = 15;
                num(变量名) :number(类型) = 15（具体值）
                表示定义一个变量num，指定类型为number;
                let str:string = 'abc';
                表示定义一个变量num，指定类型为string;
                ①联合类型（定义多个类型）
                var id:string | number;
                id = '1';
                id = 10;
                ②任意值（任何类型都可以）
                var s :any = '1';
                s = true;
                s = 10;
                ③数组类型的定义
                一、简单的定义  类型+方括号
                    let arr:number[] = [1,2,3,4];  (如果添加不是数值类型会有报错提示)
                    let arr3:any[] = [{id:1},[2,3],true];
                二、泛型	T表示变量   任何类型
                    是指在定义函数、接口或类的时候，不预先指定具体的类型，
                    而是在使用的时候再指定类型的一种特性。
                    let arr4:Array
                    ④对象类型的定义
                    let obj = {
                    name: 'csm',
                    age: 23,
                    qq: 121212
                    }
        </pre>
    </div>
</template>

<script>
export default {
    methods: {
        sum(x,y) {
            return x + y;
        }
        // ts
        // sum(x:number,y:number) {
        //     return x + y;
        // }
  },
}
</script>