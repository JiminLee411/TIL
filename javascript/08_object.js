// object

const me = {
    name: 'Lee',
    'phone number': '01012345678',
    phone: {
        type: 'galaxy S9+'
    },
    // 메서드 function 키워드만 작성하자!
    greeting: function() {
        console.log(this) // me
        console.log(`hi ${this.name}`)
    },
    greeting2: () => {
        console.log(this) // 전역객체 window
        console.log(`hi ${this.name}`)
    }
}

console(me.name)
console(me['name'])

// ES6+ 오브젝트 리터럴
let book = '자바스크립트 완전 정복'
let albums = {
    IU: ['잼잼', '무릎'],
    cm10: ['폰서트']
}
let bag = {
    book,
    albums
}

// JSON (Javascript object notation - 자바스크립트 오브젝트 표기법)
// 자바스크립트 오브젝트 표기법을 가진 문자열이다.
// object -> JSON
let jsonData = JSON.stringify(me)
let myObject = JSON.parse(jsonData)
