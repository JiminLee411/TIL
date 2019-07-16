

# Startcamp Day1

## Python 기초 문법

파이썬에서 제공하는 가이드인 [`PEP-8`](https://www.python.org/dev/peps/pep-0008/) 내용을 반영하였습니다.

파이썬을 활용하는 다양한 IT기업들은 대내외적으로 본인들의 스타일 가이드를 제공하고 있습니다.

* [구글 스타일 가이드](https://github.com/google/styleguide/blob/gh-pages/pyguide.md)
* [Tensorflow 스타일 가이드](https://www.tensorflow.org/community/style_guide)



### 식별자

파이썬에서 식별자는 변수, 함수, 모듈, 클래스 등을 식별하는데 사용되는 이름이다.

* 식별자의 이름은 영문알파벳, _, 숫자로 구성된다.

* 첫 글자에 숫자가 올 수 없다.

* 대소문자를 구별한다.

* 아래의 예약어는 사용할 수 없다.

  ```
  False, None, True, and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield
  ```

  ``` python
  # 식별자들을 직접 확인.
  import keyword
  print(keyword.keylist)
  ```

  

* 내장함수나 모듈 등의 이름으로도 만들면 안된다.

  ```python
  str = '문자열' # 이렇게 변수 선언시 뒤에 코드에 영향가므로 안돼.
  
  # 변수 할당 삭제
  del(str)
  ```



###  기초 문법

#### 인코딩 선언

인코딩은 선언하지 않더라도 `UTF-8`로 기본 설정이 되어있다.

만약, 인코딩을 설정하려면 코드 상단에 아래와 같이 선언한다. 주석으로 보이지만, Python`parser` 에 의해 읽혀진다.

```python
# -*- coding: <encoding-name> -*- 
```

#### 주석(Comment)

* 주석은 `#`으로 표현한다. 

* `docstring`은 `"""`으로 표현한다. 
  
   : 여러 줄의 주석을 작성할 수 있으며, 보통 함수/클래스 선언 다음에 해당하는 설명을 위해 활용한다.

#### 변수(variable) 및 자료형

* 변수는 `=`을 통해 할당(assignment) 된다. 

* 해당 자료형을 확인하기 위해서는 `type()`을 활용한다.

* 해당 변수의 메모리 주소를 확인하기 위해서는 `id()`를 활용한다.

* 같은 값을 동시에 할당할 수 있다.

  ```python
  x = y = 1004
  ```

* 다른 값을 동시에 할당할 수 있다.

  ```python
  x, y = 1004, 10002
  ```

  ```python
  # 변수 x와 y의 값 바꾸기
  x, y = 1004, 10002
  x, y = y, x
  ```

#### 수치형(Numbers)

##### `int` (정수, ingeger)

모든 정수는 `int`로 표현된다.

파이썬 3.x 버전에서는 `long` 타입은 없고 모두 `int` 형으로 표기 된다.

10진수가 아닌 8진수 : `0o`/2진수 : `0b` /16진수: `0x`로도 표현 가능하다.

##### 오버플로우(overflow)

* 데이터 타입별로 사용할 수 있는 메모리의 크기가 제한되어 있다.
* 표현할 수 있는 수의 범위를 넘어가는 연산을 하게되면, 기대했던 값이 출력되지 않는 현상, 즉 메모리가 차고 넘쳐 흐르는 현상

##### arbitrary-precision arithmetic

- 파이썬에서 아주 큰 정수를 표현할 때 사용하는 메모리의 크기 변화

- 사용할 수 있는 메모리양이 정해져 있는 기존의 방식과 달리, 현재 남아있는 만큼의 가용 메모리를 모두 수 표현에 끌어다 쓸 수 있는 형태.

- 특정 값을 나타내는데 4바이트가 부족하다면 5바이트, 더 부족하면 6바이트까지 사용 할 수 있게 유동적으로 운용.

  ```python
  # 파이썬에서 가장 큰 숫자를 활용하기 위해 sys 모듈을 불러옵니다.
  # 파이썬은 기존 C 계열 프로그래밍 언어와 다르게 정수 자료형에서 오버플로우가 없다.
  # arbitrary-precision arithmetic를 사용하기 때문이다. 
  import sys
  max_int = sys.maxsize
  print(max_int)
  print(max_int * max_int)
  ```

##### float(부동소수점, 실수)

실수는 `float`로 표현된다. 

다만, 실수를 컴퓨터가 표현하는 과정에서 부동소수점을 사용하며, 항상 같은 값으로 일치되지 않는다. (floating point rounding error)

이는 컴퓨터가 2진수(비트)를 통해 숫자를 표현하는 과정에서 생기는 오류이며, 대부분의 경우는 중요하지 않으나 값을 같은지 비교하는 과정에서 문제가 발생할 수 있다.

```python
a = 3.5
b = 314e-2 # 3.14
3.5 - 3.12 # floating point rounding error
# => 0.37999999999999
```

```python
# 처리 방법
# 1. 모듈 사용X
a = 3.5 - 3.12 # 0.37999999999999
b = 0.38
abs(a - b) <= 1e-10

# 2. sys 모듈 사용
import sys
abs(a - b) <= sys.float_info.epsilon

# 3. math 모듈 사용
import math
math.isclose(a, b) # a와 b는 가깝나요?
```

```python
if abs(a - b) <= 1e-10:
    print('같아요!')
else:
    print('달라요!')
    # => 같아요!
if a == b:
    print('같아요!')
else:
    print('달라요!')
    # => 달라요!
```

##### `complex` (복소수)

복소수는 허수부를 `j` 로 표현한다.

```python
a = 3 + 4j
# 복소수와 관련된 메소드들을 확인해봅시다.
a.real # 실수부
a.imag # 허수부
a.conjugate() # 켤레복소수
```

##### Bool

파이썬에는 `True`와 `False`로 이뤄진 `bool` 타입이 있다.

비교/논리 연산을 수행 등에서 활용된다.

다음은 `False`로 변환됩니다.
```
0, 0.0, (), [], {}, '', None
```

```python
# True
type(True)
bool(1)
bool(100)
bool(' ')
bool([0])
# False
bool(0)
bool(None)
bool([])
bool('')
```



#### 문자형(String)

##### 기본 활용법

* 문자열은 Single quotes(`'`)나 Double quotes(`"`)을 활용하여 표현 가능하다. 

* 단, 문자열을 묶을 때 동일한 문장부호를 활용해야하며, `PEP-8`에서는 **하나의 문장부호를 선택**하여 유지하도록 한다. 
  (Pick a rule and Stick to it)

  ```python
  # input 연 월 일으로 들어온다고 하면 다음과 같이 활용하면 편하다.
  year, month, day = list(map(int, input().split(' '))) # [2019, 7, 15]
  print(year)
  print(month)
  print(day)
  ```

* 다만, 문자열 안에 문장부호(`'`, `"` )가 활용될 경우 이스케이프 문자(`\`)를 사용하는 것 대신 활용 가능하다.

* 여러줄에 컬쳐있는 문장은 다음과 같이 표현 가능하다.

  ```python
  print("""안녕하세요.
  반갑습니다.""")
  
  # 물론 string interpolation도 가능합니다.
  name = '철수'
  print(f"""{name} 안녕?
  string interpolation도 가능하다!
  """)
  ```


##### 이스케이프 문자열

문자열을 활용하는 경우 특수문자 혹은 ㅈ작을 하기 위하여 사용되는 것으로 `\` 를 활용하여 이를 구분한다.

```python
print('줄바꿈\n탭\t탭\n\\')
```

* print를 하는 과정에서도 이스케이프 문자열을 활용 가능합니다.

  ```python
  print('내용을 옆으로 띄어서 표현하고 싶다면,',end='\t')
  print('탭탭')
  # => 내용을 옆으로 띄어서 표현하고 싶다면,    탭탭
  
  # 물론, end 옵션은 이스케이프 문자열이 아닌 다른 것도 가능합니다.
  print('개행문자 말고 다른 것도 되는데', end='...')
  print('진짜로', end='!')
  # => 개행문자 말고 다른 것도 되는데...진짜로!
  ```

##### String interpolation

1) `%-formatting`

```python
name = '홍길동'
'Hello, %s' % name
```

2) `str.format()`

```python
'Hello, {}'.format(name)
```

3) `f-strings` 

```python
f'Hello, {name}'
```

4) `+` 연산자 이용

```python
'Hello, ' + name
```

* f-stings에서는 형식을 지정할 수 있으며,

  ```python
  # 다양한 형식을 활용하기 위해 datetime 모듈로 오늘을 표현
  import datetime
  today = datetime.datetime.now()
  print(today)
  print(type(today))
  f'오늘은 {today:%Y}년 {today:%m}월 {today:%d}일입니다. {today:%A}입니다. {today:%H}:{today:%M}:{today:%S}'
  # => 오늘은 2019년 07월 15일입니다. Monday입니다. 13:32:13
  ```

* 연산과 출력형식 지정도 가능하다.

  ```python
  # string interpolation에서 연산과 숫자 출력형식을 지정해봅시다.
  pi = 3.141592
  f'원주율은 {pi:.2f}이고, 원의 면적은 {pi*2*2}'
  ```

#### 연산자

##### 산술연산자

* 제곱

  ```python
  # 2의 1000승을 확인해봅시다.
  2**1000
  ```

* 나눗셉

  ```PYTHON
  # 나눗셈과 관련된 산술연산자를 활용해봅시다.
  print(5 / 2)
  print(5 // 2) # 몫
  print(5 % 2) # 나머지 (modulo)
  print(int(5/2))
  ```

  ```python
  # divmod는 나눗셈과 관련된 함수입니다.
  print(divmod(5, 2)) # (몫, 나머지)
  quotient, remainder = divmod(5, 2)
  print(f'몫은 {quotient}, 나머지는 {remainder}이다.')
  ```

* 양/음수 표현

  ```python
  # 음수 양수 표현도 해봅시다.
  positive_num = 4
  negative_num =-4
  print(negative_num)
  print(-negative_num)
  ```

##### 논리연산자

* 파이썬에서 and는 a가 거짓이면 a를 리턴하고, 참이면 b를 리턴한다.

* 파이썬에서 or은 a가 참이면 a를 리턴하고, 거짓이면 b를 리턴한다.

  ```python
  # and의 단축평가(short-circuit evaluation)에 대해서 알아봅시다.
  print(3 and 5) # 5
  print(3 and 0) # 0
  print(0 and 3) # 0
  print(0 and []) # 0
  ```

  ```python
  # or의 단축평가(short-circuit evaluation)에 대해서 알아봅시다.
  print(5 or 3) # 5
  print(3 or 0) # 3
  print(0 or 3) # 3
  print(0 or []) # []
  ```

##### 기타연산자

* **Concatenation** : 숫자가 아닌 자료형은 `+` 연산자를 통해 합칠 수 있다.

  ```python
  # 문자열끼리 더해봅시다.(합쳐봅시다.)
  'Hi, ' + 'Ssafy'
  # => 'Hi, Ssafy'
  
  # list끼리 더해봅시다.(합쳐봅시다.)
  [1, 2, 3] + ['회', '초밥']
  # => [1, 2, 3, '회', '초밥']
  ```

* **Containment Test** : `in` 연산자를 통해 속해있는지 여부를 확인한다.

  ```python
  # 문자열안에 특정한 문자가 있는지 확인해봅시다.
  'a' in 'apple' # True
  
  # list안에 특정한 원소가 있는지 확인해봅시다.
  'hi'in [1, 2, 'hi'] # True
  
  # range안에 특정한 원소가 있는지 확인해봅시다.
  5 in range(1, 5) # False
  ```

* **Identity** : `is` 연산자를 통해 동일한 object인지 확인할 수 있다.

  ```python
  # 파이썬에서 -5부터 256까지의 id는 동일합니다.
  # 속도 향상 => 가장 많이 찾는 수의 id 값을 고정하여 메모리로 안찾아가도 됨.
  a = 3
  b = 3
  print(a == b) # True
  print( a is b) # True
  print(id(a), id(b)) # 계속 실행해도 id 고정
  
  c = 257
  d = 257
  print(c == d) # True
  print( c is d) # False
  print(id(c), id(d)) # 실행할때마다 id 계속 바뀜
  ```

* **Indexing/Slicing** : `[]`를 통한 값 접근  및 `[:]` 을 통한 슬라이싱

  ```python
  'hi'[0] # 'h'
  'hi'[-1] # 'i'
  [1, 2, 3][-1] # 3
  [0, 1, 2][0:1] # [0]
  [0, 1, 2][1:3] # [1, 2]
  [0, 1, 2][2:3] # [2]
  ```

  

1. 저장

   ```python
   # 저장은 = 을 통해서 한다.
   dust = 64 # 숫자(integer)
   name = '이지민' # 문자열(string)
   is_summer = True # 참/거짓, Boolean(True/False)
   ```

   ```python
   # 리스트 활용법
   my_list = [1, 2, 3, '정지수', '염겨레']
   print(my_list[0]) # => 1
   # 딕셔너리 활용법
   my_dictionary = {'정지수': '남자', '염겨레': '남자'}
   print(my_dictionary['정지수']) # => '남자'
   ```

   

2. 조건

   ```python
   if dust > 150:
       print('나쁨')
   elif dust > 80:
       print('나쁨')
   else:
       print('보통')
   ```

   

3. 반복

   ```python
   lunch_box = ['짬뽕', '류산슬덮밥', '제육..']
   # 정해진 리스트 반복
   for menu in lunch_box:
       # menu = lunch_box9[0], ..., menu = lunch_box[2]
       print(menu)
       
   # n번 반복
   for i in range(5):
       print('helllo!!')
       
   ```

4.  내장함수

   > 내장합수는 별도로 import 구문이 필요없다.

   ```python
   print('hi')
   print(max([2, 4, 2])) # => 4
   print(min([1, 2, 5])) # => 1
   print(abs(-5)) # => 5
   print(len([1, 2, 3])) # => 3
   ```

5.  외장함수

   > 외장함수는 반드시 import 가 필요하다.
   >
   > 다만, 파이썬을 설치하면 그냥 불러서 쓸 수 있다.

   ```python
   import random
   numbers = range(1, 46)
   lotto = random.sample(numbers, 6)
   print(sortes(lotto))
   ```

6.  패키지

   > 패키지는 반드시 설치를 필요로 한다.

   `pip install 패키지명` 으로 설치를 한다.

   ```bash
   $ pip install requests
   ```

   ```python
   import requests
   requests.get(url)
   ```



## 파이썬을 통한 크롤링

1. 필수 설치 패키지

   * `requests`  : 파이썬으로 요청을 보내는 패키지

   * `bs4`  : 문자열을 html 등으로 구조화(파싱)를 해주는 패키지

      ```bash
   $ pip install requests
   $ pip install bs4
      ```
      
      

2.  네이버에서 코스피지수 가져오기

   ```python
   # 0. 활용할 패키지를 불러온다.
   import requests
   from bs4 import BeautifulSoup
   # 1. url을 설정한다.
   url = 'https://finance.naver.com/sise/'
   # 2. 요청을 보내고, 그 결과의 내용을(text) response에 저장한다.
   response = requests.get(url).text
   # 3. html 문서로 변환한다.
   soup = BeautifulSout(response, 'html.parser')
   # 4. 원하는 값을 선택자(selector)를 활용해서 가져온다.
   kospi_value = soup.select_one('#KOSPI_now').text
   print(kospi_value)
   ```


