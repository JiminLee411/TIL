// 모든 me가 다 Jimin이 되어버려! 
const me = {
    name: 'Jimin',
    phone: '010-1234-1234',
    // 메서드에서도 arrow function 사용 금지 -> window.name이 되어버리기 때문
    greeting: function() {
        return 'hi, ' + this.name + '!'
    }
}

// function 사용시, 여러 객체 생성 가능
const Person = function(name, phone) {
    this.name = name
    this.phon = phone
    this.greeting = function() {
        return 'hi, ' + this.name + '!'
    }
}
// 객체 생성시
const lee = new Person('Jimin', '010-1234-1234')


// Arrow function은 동작하지 않아!!! -> window.name이 되어버리기 때문

const Animal = name => {
    this.name= name
}
const doh = new Animal('dog') //Error


const name = '겨레'
const phone = '010-1233-1233'
const greetiong = function () {
    return 'hi', + this.name
}

const you = {
    name,
    phone,
    greeting
}