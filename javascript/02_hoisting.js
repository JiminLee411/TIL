console.log(jimin)
var jimin = '이지민'

/*
var jimin // hoisting
console.log(jimin)
jimin = '이지민'
*/

console.log(enjung) // ReferenceError - 초기화하기전 접근 X
let enjung = '김은정'

/*
var
1. 선언과 동시에 초기화
2. 할당

let, const는 TDZ(Temporal Dead Zone)이 존재
1. 선언
2. TDZ - 변수가 이 위치에 있을때 접근하면 에러 발생
3. 초기화
4. 할당
*/