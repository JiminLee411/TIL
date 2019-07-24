# data_structure

> **뒷 부분에 활용할 패키지를 미리 `import` 해야한다**

```python
form IPython.display import IFrame
```



## 1  문자열 메소드 활용하기

### 1.1 변형

#### 1.1.1 `.capitalize()` , `.title()` , `.upper()`

`.capitalize()` : 앞글자를 대문자로 만들어 반환한다.

`.title()` : 어포스트로피나 공백 이후 한글자를 대문자로 만들어 반환한다.

`.upper()` : 모두 대문자로 만들어 반환한다.

```python
a = "hI! Everyone, I'm kim"

print(a.capitalize()) # Hi! everyone, i'm kim
print(a.title()) # Hi! Everyone, I'M Kim
print(a.upper()) # HI! EVERYONE, I'M KIM
```



#### 1.1.2 `lower()` , `swapcase()`

`lower()` : 모두 소문자로 만들어 반환한다.

`swapcase()` : 대<->소문자를 변경하여 반환한다.

```python
a = "hI! Everyone, I'm kim"

print(a.swapcase()) # Hi! eVERYONE, i'M KIM
```



#### 1.1.3 `.join(iterable)` : 특정 문자열로 만들어 반환한다.

> iterable : 순차적으로 값을 꺼내올 수 있는것

```python
'apple'.join(['1','2','3','4']) # '1apple2apple3apple4'
```



#### 1.1.4 `.replace(old, new[, count])`

* 바꿀 대상 글자를 새로운 글자로 바꿔서 반환한다.

* count를 지정하면 해당 갯수만큼만 시행한다.

  ```python
  'apple'.replace('p', 'a') # 모든 p를 a로 변경 : 'aaale'
  'apple'.replace('p', 'a', 1) # 하나의 p를 a로 변경 : 'aaple'
  ```



#### 1.1.5 글씨 제거(`strip([chars])`)

* 특정한 문자들을 지정하면, 양쪽이나 오른쪽, 왼쪽 제거

  ```python
  '        hi          '.strip() # 양쪽으로 지워줌
  # => 'hi'
  '       hi          '.rstrip() # 오른쪽만 지워줌
  # => '       hi'
  '       hi          '.lstrip() # 왼쪽만 지워줌
  # => 'hi          '
  '안녕하세요^^'.strip('^^') # 문자도 지워줌
  # => '안녕하세요'
  'aabbaabbaa'.strip('aa') # 문자열의 끝쪽만 지워줌, 중간은 못지움
  # => 'bbaabb'
  ```



### 1.2 탐색 및 검증

#### 1.2.1 `.find(x)` : x의 첫 번째 위치를 반환합니다. 없으면, -1을 반환합니다.

```python
'wow!'.find('w') # => 0  찾는 문자의 첫번째 위치를 반환
'wow!'.find('a') # => -1  없으면 -1 반환
'wow!'.find('o') # => 1
```



#### 1.2.2 `.index(x)` : x의 첫번째 위치를 반환합니다. 없으면 오류가 발생합니다.

```python
'wow!'.index('w') # => 0
'wow!'.index('a') # 없으면 오류 반환
```



### 1.3 `split()` : 문자열을 특정한 단위로 나누어 리스트로 반환한다.

```python
'3 10'.split() # => ['3', '10']
'apple'.split('p') # => ['a', '', 'le']
'a_b_c'.split('_') # => ['a', 'b', 'c']
inputs = '3 10'
a, b = map(int, inputs.split())
print(a, b) # => 3 10
```

#### 1.3.1 다양한 확인 메소드 : 참/거짓 반환

```
.isalpha(), .isdecimal(), .isdigit(), .isnumeric(), .isspace(), .isuper(), .istitle(), .islower()
```

```python
dir('string')
```

decimal -> digit -> numeric 이렇게 포함됨


| isdecimal() | isdigit() | isnumeric() |            Example             |
| :---------: | :-------: | :---------: | :----------------------------: |
|    True     |   True    |    True     |     "038", "੦੩੮", "０３８"     |
|    False    |   True    |    True     |      "⁰³⁸", "🄀⒊⒏", "⓪③⑧"       |
|    False    |   False   |    True     | "↉⅛⅘", "ⅠⅢⅧ", "⑩⑬㊿", "壹貳參" |
|    False    |   False   |    False    |      "abc", "38.0", "-38"      |



## 2 리스트 메소드 활용하기

### 2.1 값 추가 및 삭제

#### 2.1.1 `.append(x)` 

리스트에 값을 추가할 수 있다.

```python
cafe = ['starbucks', 'tomntoms', 'hollys']
print(cafe) # => ['starbucks', 'tomntoms', 'hollys']
cafe.append('삼성화재연수원 카페')
cafe[len(cafe):] = ['ediya']
print(cafe) # => ['starbucks', 'tomntoms', 'hollys', '삼성화재연수원 카페', 'ediya']
cafe[len(cafe):] # => []
```



#### 2.1.2 `.extend(iterable)`

리스트에 iterable(list, range, tuple, string*유의*)값을 붙일 수가 있습니다.

```python
# 앞서 만든 리스트에 추가해봅시다.
cafe.extend(['카페베네'])
print(cafe)
# => ['starbucks', 'tomntoms', 'hollys', '삼성화재연수원 카페', 'ediya', '카페베네']

# 앞서 배운 list concatenate와 동일합니다.
cafe.extend(['빽다방', '설빙'])
print(cafe) 
# => ['starbucks', 'tomntoms', 'hollys', '삼성화재연수원 카페', 'ediya', '카페베네', '빽다방', '설빙', '드롭탑']

# append와 비교해봅시다.
cafe.append(['동네카페'])
print(cafe)
# => ['starbucks', 'tomntoms', 'hollys', '삼성화재연수원 카페', 'ediya', '카페베네', '빽다방', '설빙', '드롭탑', ['동네카페']]

caffe.extend('커피그루나루')
print(cafe)
# => ['starbucks', 'tomntoms', 'hollys', '삼성화재연수원 카페', 'ediya', '카페베네', '빽다방', '설빙', '드롭탑', ['동네카페'], '커', '피', '그', '루', '나', '루']

a = '안녕하세요, 여러분'
a.split() # => ['안녕하세요,', '여러분']

b = '안녕하세요, 여러분'
result = []
result.extend(b)
result # => ['안', '녕', '하', '세', '요', ',', ' ', '여', '러', '분']
```



#### 2.1.3 `insert(i, x)`

정해진 위치 `i` 에 값을 추가합니다.

```python
cafe.insert(0, 'hi') # 맨 앞에 추가된다.
cafe.insert(-1, 'bye') # 맨 뒤가 아닌 하나 전에 추가된다.
cafe.insert(len(cafe), 'real') # 이렇게 해야 맨 뒤에 추가
cafe.insert(len(cafe)+1000, 'nope') # 길이를 넘어서는 인덱스는 무조건 마지막에 하나만 붙는다.
```



#### 2.1.4 `remove(x)`

리스트에서 값이 x인 것을 삭제한다.

```python
numbers = [1, 2, 3, 1, 2]
numbers.remove(1) # [2, 3, 1, 2]
numbers.remove(1) # [2, 3, 2]
numbers.remove(1) # 에러가 발생한다.
```



#### 2.1.5 `.pop(i)`

정해진 위치 `i` 에 있는 값을 삭제하며, 그 항복을 반환한다.

`i` 가 지정되지 않으면 마지막 항목을 삭제하고 되돌려준다.

```python
a = [1, 2, 3, 4, 5, 6]
a.pop(0) # 1
a # [2, 3, 4, 5, 6]
member = ['연용흠', '박태수', '염동환', '토마스']
bye_member = member.pop() # 아무값도 안넣으면 가장 마지막 원소 pop
print(f'{bye_member}님 이용해주셔서 감사합니다.')
```



### 2.2 탐색 및 정렬























