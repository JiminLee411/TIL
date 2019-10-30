let numbers = [10, 1, 3, 5]

numbers[0] // 10
numbers[-1] // undefined
numbers.length //4
numbers.reverse() //[5, 3, 1, 10] return + 원본 모두 변경
numbers.push(5) // 마지막 원소에 추가 + return (길이) [10, 1, 3, 5, 5] 
numbers.pop() // 마지막 원소 제거 + return (해당하는 원소) [10, 1, 3, 5] 
numbers.includes(1) // 포함여부 확인 (true / false)
numbers.unshift(3) // 가장 첫번째 원소에 추가 [3, 10, 1, 3, 5]
numbers.shift() // 가장 첫번째 원소 제거
numbers.indexOf(1) // 가장 먼저 존재하는 위치 return
numbers.join() // 문자열로 변환 (기본이 ,) '10,1,3,5,1'
numbers.join('-') // '10-1-3-5-1'