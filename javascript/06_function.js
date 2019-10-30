/*
    * 함수
*/
console.log(myAdd(1, 2))
console.log(myAdd2(1, 2))

// 선언식 -> hoisting
function myAdd(a, b) {
    return a + b
}

// 표현식 -> 웬만하면 이거 사용!!
let myAdd2 = function (a, b) {
    return a + b
}


/*
    * arrow function
    ES6+
*/
function myFunction(a) {
    return a + 1
}
// 1. function 키워드 삭제 후 =>
let myArrowFunction = (a) => {return a + 1}

// 1-1. 인자가 하나라면, 소괄호 삭제 가능
// 1-2. 문장이 한 줄이고, 리턴이라면 중괄호 및 return 키워드 생략 가능
let myArrowFunction1 = a => a + 1

// 제곱의 결과를 나타내는 square 함수를 표현식
let mySquare = function (num) {
    return num**2
}
mySquare = (num) => { return num**2 } // arrow function 기본
mySquare = num => { return num**2 } // 받는 인자가 하나일때
mySquare = num => num**2 // 보내는 인자도 하나일때

let greeting = function () {
    console.log('happy!')
}

// 1-3. 인자가 없는 경우에는 () or _
greeting = () => {console.log('happy!')}
greeting = _ => {console.log('happy!')}

// 1-4. 기본인자
let greeting2 = (name='지민') => name

/*
    * 익명함수 - 즉시 실행
*/

(function (a) {
    return a * 10
}(100))

((a) => a*(10))(100)

