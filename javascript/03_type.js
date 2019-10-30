/*
type
    * 원시타입 (primitive data type)
        - boolean
        - null
        - undefiened
        - number
        - string
        - symbol (ES6+)

    * 객체타입 (object)
        -object
*/

// ------- number -----------------------------
3
-5
Infinity // type -> number
NaN // Not a number , type -> number
0/0 // NaN
10/0 // Infinity

// ------- string ------------------------------
let myName = '지민'
myName = "이\n지민"
// ` (backtick) : ES6+ 템플릿리터럴
// string interpolation, 줄바꿈(개행)이 가능
myName = `지민`
console.log(`안녕하세요, ${myName}입니다.`)

// ------- boolean -------------------------------
true
false

// empty value
undefined // type -> undefined
null // type -> object