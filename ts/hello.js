window.onload = function () {
    // var flag = false;
    // var num = 15;
    // var str = 'abc';
    // 定义函数，计算二个参数的和
    function sum(x, y) {
        return x + y;
    }
    console.log(sum(2, 3));
    var tom = {
        //    name: 'tom',
        age: 18,
        sex: 'num',
        obj: { id: 1 }
    };
    // 函数类型定义     输入类型    输出类型
    function f(x, y) {
        if (y === void 0) { y = 1; }
        return [x, y];
    }
    ;
    f(1, 3);
    // 泛型
    function f4(x, y) {
        return [x, y];
    }
    ;
    f4(2, 3);
    f4('a', 3);
};
