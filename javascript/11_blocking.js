
function a() {
    console.log('a')
}
console.log('hi')
a()
setTimeout(a, 3000)
console.log('bye')

function printHello() {
    console.log('Hello')
}

function baz() {
    console.log('baz') // 1
    setTimeout(printHello, 0) // 3
    console.log('baz end') // 2
}

function bar() {
    console.log('bar')
    baz()
}

function foo() {
    console.log('foo')
    bar()
}

foo()

function sum (x, callbackfn ) {
    setTimeout(callbackfn, 100, x+1)
}
var res = 0
sum(2, function (x) {
    res = x
    console.log(res)
})
console.log(res)