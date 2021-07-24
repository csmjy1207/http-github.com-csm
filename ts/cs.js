console.log(2);

function sum(x, y) {
    return x + y;
}

console.log(sum(2,3));

for(var i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);},100 * i);
}

for(let i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);},100 * i);
}