let userName = prompt('넌 누구야?')

let message

if (userName === 'ssafy') {
    message = '<h1>Hello SSAFY</h1>'
} else if (userName === '1q2w3e4r') {
    message = '<h1>Admin page 입니다.</h1>'
} else {
    message = `<h1>${userName}, 환영합니다.</h1>`
}

document.write(message)

switch(userName) {
    case '1q2w3e4r': {
        message = '<h2>관리자님 충성충성 ^^7</h2>'
        break
    }
    case 'ssafy': {
        message = '<a href="https://edu.ssafy.com">싸피</a>'
        break
    }
    default: {
        message = `<h1>${userName}, 환영합니다.</h1>`
        break
    }
}

document.write(message)

// ----- while문 -------------------------------- //
while ( i > 0 ) {
    console.log('hi')
}

// ----- for문 --------------------------------- //
/*
    let은 블록스코프를 가지고 있어서 for 문 이후에 해당 변수는 없음.
    var는 함수스코프를 가지고 있어서 for 문 이후에 i 변수에 값이 유지.
*/

// let
for (let i = 0; i<3; i++) {
    console.log(i)
}
// console.log(i) // ReferenceError - (undefined Error발생) for문 조건문 내에서 선언했으므로

// var
for (var i = 0; i<3; i++) {
    console.log(i) // 0, 1, 2
}
console.log(i)  // 3

let myArray = ['태우', '경호', '은비']
for (let name of myArray) {
    document.write(name)
}