# JavaScript

## 1. variable

<table>   <thead>       <tr>           <th></th>           <th>var</th>           <th>let</th>           <th>const</th>       </tr>   </thead>   <tbody>       <tr>           <th></th>           <td></td>           <td colspan="2">ES6+ == ES2015. 2015년 이후에 나온 웹만 이렇게 적혀 있음</td>       </tr>       <tr>           <th>스코프</th>           <td>함수 스코프</td>           <td colspan="2">블록 스코프</td>       </tr>       <tr>           <th rowspan="2">재선언/할당</th>           <td rowspan="2">재선언/할당 무한히 가능</td>           <td>재선언 불가능 / 할당 무한히 가능</td>           <td>재선언 불가능 / 할당 불가능</td>       </tr>       <tr>           <td colspan="2">Error가 뜨게 만듦으로써 코드를 잘못 짰다는 걸 알 수 있게 됨</td>       </tr>       <tr>           <th>출력이 선언보다 먼저일 때</th>           <td>Hoisting -> undefined</td>           <td colspan="2">임시공간(Error: Reference Error)</td>       </tr>   </tbody></table>

### 1.1 선언과 할당

```javascript
// ----- var ---------------------------------- //
var myVar //선언
myVar = 1 // 할당
console.log(myVar)

var myVar = 'Hello' // 재선언 가능

// ----- let --------------------------------- //
let myLet
myLet = 2
myLet = 3
// let myLet = 'hi' // SyntaxError -> 이미 선언됨

// const myConst // SyntaxError -> 초기화 누락
const myConst = 'hi' // 반드시 값과 함께 선언
// myConst = 'bye' // TypeError -> const에 할당함
```

### 1.2 scope

```javascript
let VarFunction = function() {
    var myVar = 0
    if (ture) {
        var myVar = 1
        console.log(myVar) //1
    }
    console.log(myVar) //1
}

let LetFunction = function() {
    let myLet = 0
    if (ture) {
        let myLet = 1
        console.log(myLet) //1
    }
    console.log(myLet) //0
}
```



## 2. hoisting



## 3. type



## 4. operator



## 5. flow

