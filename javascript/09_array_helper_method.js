/*
    Array helper methods
*/

/*
    Array.forEach
*/

let numbers = [1, 2, 3]
// 1. 반복문 (for)
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i])
}

// 2. 반복문 (for..of)
for (let number of numbers) {
    console.log(number)
}

// 3. forEach
numbers.forEach(function(num) {
    console.log(num)
})

// 실습
const images = [
    {height: 30, width: 20},
    {height: 100, width: 100},
    {height: 10, width: 5}
]
// let areas = [600, 10000, 50]
// 1.
let areas = []
for (let feature of images) {
    areas.push(feature.height * feature.width)
}
console.log(areas)

// 2.
images.forEach(function(image, idx) {
    console.log(idx)
    areas.push(image.height * image.width)
})
console.log(areas)
/*
    map
    : 콜백함수의 return 결과를 각각 원소로 하는 배열을 **리턴**!
*/
let numbers = [1, 2, 3]

let doubleNumbers = numbers.map(function(number){
    return number * 2
})
console.log(doubleNumbers)

let doubleNumbers2 = numbers.map(number => number*2)
console.log(doubleNumbers2)

// 실습 images -> map
let areas = images.map(image => image.height * image.width)
console.log(areas)

/*
    filter
    : 콜백함수의 return 결과가 참인 것을 각각 원소로 하는 배열을 **리턴**!
*/
// images의 높이가 100보다 작은 object만 담은 배열
let h_100 = []
// 1. for이용
for (let image of images) {
    if (image.height < 100) {
        h_100.push(image)
    }
}
// 랴
h_100 = images.filter(function(image){
    return image.height < 100
})
console.log(h_100)

h_100 = images.filter(image => image.height < 100)
console.log(h_100)

// type fruit만 뽑아내기
let products = [
    {name: 'banana', type: 'fruit'},
    {name: 'tomato', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'cucumber', type: 'vegetable'}
]

let bag = products.filter(product => product.type==='fruit')
console.log(bag)

/*
    reduce(callback fn, initialvalue))
    : return 결과를 누젹한 결과를 return
*/
let mySsafy = [100, 100, 95, 90]

let avg = 0
for (score of mySsafy) {
    avg += score
}
console.log(avg)
avg = mySsafy.reduce(function(total, score){
    return total + score
})
avg = mySsafy.reduce((total, score) => total + score)
console.log(avg)

// 기본값이 설정 되어있는 경우
avg = mySsafy.reduce(function(total, score){
    return total + score
}, 30)
avg = mySsafy.reduce((total, score) => total + score, 30)
console.log(avg)

/*
    find : 일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score === 95
})

mySsafy.find(score => score === 95)

mySsafy.findIndex(function(score){
    return score === 95
})

mySsafy.findIndex(score => score === 95)

let heros = [
    {name: '헐크', age: 100},
    {name: '아이언맨', age: 30},
    {name: '스파이더맨', age: 25}
]

//나이가 30인 사람
heros.find(hero => hero.age === 30).name

/*
    some, every
*/
let myNumbers = [1, 2, 3, 4]
myNumbers.some(function(number) {
    return number % 2 === 0
})

myNumbers = [3, 5]

myNumbers.every(function(number) {
    return number % 2 !== 0
})